<?php
	include_once '../model/arquivoDAO.class.php';
	include_once '../model/postDAO.class.php';

	session_start();

	if(isset($_POST['Salvar']) AND isset($_SESSION['id_usuario']) AND isset($_SESSION['id_pesquisa']) AND isset($_POST['titulo']) AND isset($_POST['descricao']) AND isset($_POST['conteudo']) AND isset($_FILES['capa'])){

		$id_petiano = $_SESSION['id_usuario'];
		$id_pesquisa = $_SESSION['id_pesquisa'];
		$titulo = $_POST['titulo'];
		$descricao = $_POST['descricao'];
		$conteudo = $_POST['conteudo'];
		$capa = $_FILES['capa'];

		$retorno = false;

		if($_POST['Salvar'] == 1){
			$post = new PostDAO();
			$retorno = $post->save_post($id_petiano, $id_pesquisa, $titulo, $descricao, $conteudo, $capa, 'Publicado');
			$post->postDAO_close();
		}
		elseif($_POST['Salvar'] == 2){
			$post = new PostDAO();
			$retorno = $post->save_post($id_petiano, $id_pesquisa, $titulo, $descricao, $conteudo, $capa, 'Rascunho');
			$post->postDAO_close();
		}

		if ($retorno) {
			//Salvar documentos
			if(isset($_FILES['arquivo0'])){
				$post = new PostDAO();

				$atual = $post->get_last_post_by_usuario($id_petiano);
				$id_post = $atual->get_id();
				
				$post->postDAO_close();
				
				
				$arq = new ArquivoDAO();

				$cont = 0;
				$atual = 'arquivo'.$cont;
				while (isset($_FILES[$atual])) {
					$file = $_FILES[$atual];

					$arq_titulo = 'titulo'.$cont;
					if (isset($_POST[$arq_titulo])) {
						$arq_titulo = $_POST[$arq_titulo];
						$arq->upload_document($file, $id_post, $arq_titulo, true);
					}else{
						$arq->upload_document($file, $id_post, null, true);
					}

					$cont++;
					$atual = 'arquivo'.$cont;
				}

				$arq->arquivoDAO_close();
			}
		}
	}

	header('location: ../../index.php');
?>