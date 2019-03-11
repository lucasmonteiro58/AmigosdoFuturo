<?php
	include_once '../model/arquivoDAO.class.php';
	include_once '../model/postDAO.class.php';

	session_start();

	if(isset($_POST['Salvar']) AND isset($_POST['post'])){

		$id_usuario = $_SESSION['id_usuario'];
		$id = $_POST['post'];

		$post = new PostDAO();

		$retorno = false;
		$retorno = $post->verifica_post_by_usuario($id_usuario, $id);

		if ($retorno) {
			$postagem = $post->get_post_by_id($id);

			//Muda tipo
			if($_POST['Salvar'] == 1){
				$postagem->set_tipo('Publicado');
			}

			//Muda titulo
			if(isset($_POST['titulo'])){
				$titulo = $_POST['titulo'];
				$postagem->set_titulo($titulo);
			}

			//Muda descricao
			if(isset($_POST['descricao'])){
				$descricao = $_POST['descricao'];
				$postagem->set_descricao($descricao);
			}

			//Muda conteudo
			if(isset($_POST['conteudo'])){
				$conteudo = $_POST['conteudo'];
				$postagem->set_conteudo($conteudo);
			}

			$post->update_post($postagem);

		}

		$post->postDAO_close();
	}

	header('location: ../../index.php');
?>