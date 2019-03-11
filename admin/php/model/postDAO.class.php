<?php

include_once 'post.class.php';
include_once 'arquivoDAO.class.php';
include_once 'controleConexao.class.php';

class PostDAO {

	private $con;
	private $num_posts;

	public function __construct (){
		$controleConexao = new controleConexao();
		$this->con = $controleConexao->conexao();
	
		$this->num_posts = 7;
	}

	public function __destruct(){}

	public function get_post_by_id($id) {
		$query = "SELECT * FROM posts WHERE id=".$id;
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			$dado = $resultado->fetch_array();
			$u = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			
			return $u;
		}else {
			return false;
		}	
	}

	public function get_posts_publicados_by_usuario($id_petiano) {
		$query = "SELECT * FROM posts WHERE id_petiano=".$id_petiano." AND tipo = 'Publicado' ORDER BY data DESC";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			while($dado = $resultado->fetch_array()){
				$u[] = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			}

			return $u;
		}else {
			return false;
		}	
	}

	public function get_posts_rascunhos_by_usuario($id_petiano) {
		$query = "SELECT * FROM posts WHERE id_petiano=".$id_petiano." AND tipo = 'Rascunho' ORDER BY data DESC";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			while($dado = $resultado->fetch_array()){
				$u[] = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			}

			return $u;
		}else {
			return false;
		}
	}	

	public function get_posts_publicados() {
		$query = "SELECT * FROM posts WHERE tipo != 'Rascunho' ORDER BY data DESC";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			while($dado = $resultado->fetch_array()){
				$u[] = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			}

			return $u;
		}else {
			return false;
		}
	}

	public function get_post_by_titulo($titulo) {
		$query = "SELECT * FROM posts WHERE titulo='".$titulo."' ORDER BY id DESC";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			$dado = $resultado->fetch_array();
			$u = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			
			return $u;
		}else {
			return false;
		}		
	}

	public function get_last_post_by_usuario($id) {
		$query = "SELECT * FROM posts WHERE id_petiano='".$id."' ORDER BY id DESC LIMIT 0,1";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			$dado = $resultado->fetch_array();
			$u = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			
			return $u;
		}else {
			return false;
		}		
	}

	public function get_posts_by_page($pagina) {
		$inicio = $this->num_posts * ($pagina - 1);

		$query = "SELECT * FROM posts WHERE tipo != 'Rascunho' ORDER BY data DESC LIMIT ".$inicio.",".$this->num_posts;
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			while($dado = $resultado->fetch_array()){
				$u[] = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			}

			return $u;
		}else {
			return false;
		}		
	}

	public function get_qtd_all_pages() {

		$query = "SELECT * FROM posts WHERE tipo != 'Rascunho'";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$u = $resultado->num_rows;

		return $u;
	}

	public function get_posts_by_search($chave) {
		$chave = addslashes(trim($chave));

		$query = "SELECT DISTINCT posts.id, posts.id_pesquisa, posts.id_petiano, posts.titulo,posts.descricao, posts.capa, posts.conteudo, posts.data, posts.tipo
		FROM petianos, pesquisas, posts, posts_tags, tags WHERE posts.tipo != 'Rascunho' 
		AND petianos.id = posts.id_petiano AND posts.id_pesquisa = pesquisas.id AND  posts.id = posts_tags.id_post AND tags.id = posts_tags.id_tag
		AND ( posts.titulo LIKE '%".$chave."%'
			OR posts.conteudo LIKE '%".$chave."%'
			OR posts.descricao LIKE '%".$chave."%'
			OR posts.data LIKE '%".$chave."%'
			OR petianos.nome LIKE '%".$chave."%'
			OR pesquisas.nome LIKE '%".$chave."%'
			OR tags.nome LIKE '%".$chave."%'
			)";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			while($dado = $resultado->fetch_array()){
				$u[] = new Post($dado['id'], $dado['id_pesquisa'], $dado['id_petiano'], $dado['titulo'], $dado['descricao'], $dado['capa'], $dado['conteudo'], $dado['data'], $dado['tipo'], $dado['visitas']);
			}

			return $u;
		}else {
			return false;
		}
	}

	public function get_qtd_pages_by_search($chave) {
		$chave = addslashes(trim($chave));

		$query = "SELECT DISTINCT posts.id, posts.id_pesquisa, posts.id_petiano, posts.titulo, posts.descricao, posts.capa, posts.conteudo, posts.data, posts.tipo
		FROM petianos, pesquisas, posts, posts_tags, tags WHERE posts.tipo != 'Rascunho' 
		AND petianos.id = posts.id_petiano AND posts.id_pesquisa = pesquisas.id AND  posts.id = posts_tags.id_post AND tags.id = posts_tags.id_tag
		AND ( posts.titulo LIKE '%".$chave."%'
			OR posts.descricao LIKE '%".$chave."%'
			OR posts.conteudo LIKE '%".$chave."%'
			OR posts.data LIKE '%".$chave."%'
			OR petianos.nome LIKE '%".$chave."%'
			OR pesquisas.nome LIKE '%".$chave."%'
			OR tags.nome LIKE '%".$chave."%'
			)";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$u = $resultado->num_rows;

		return $u;
	}	

	public function save_post($id_petiano, $id_pesquisa, $titulo, $descricao, $conteudo, $capa, $tipo) {
		$data = date("Y-m-d H:i:s");
		
		$query = "INSERT INTO posts(id_pesquisa, id_petiano, titulo, descricao, conteudo, data, tipo, visitas) 
		VALUES (".$id_pesquisa.", ".$id_petiano.", '".strtoupper($titulo)."', '".$descricao."', '".$conteudo."', '".$data."', '".$tipo."', 0)";
		$resultado = $this->con->query($query) or die ($this->con->error);

		if ($resultado){
			$atual = $this->get_last_post_by_usuario($id_petiano);
			$id_post = $atual->get_id();

			//Inserir foto capa no banco
			$arq = new ArquivoDAO();
			$retorno = $arq->upload_image($capa, $id_post, true);

			if($retorno == 1){
				//Atualiza caminho da capa no post
				$foto = $arq->get_last_arquivo_by_post($id_post);
				$foto = $foto->get_caminho();
				$atual->set_capa($foto);

				$retorno = $this->update_post($atual);
			}

			$arq->arquivoDAO_close();

			if($retorno){
				return true;
			}else{
				//Deletar post by id
				return false;
			}
		}else{
			return false;
		}		
	}

	public function update_post($post) {

		$id = $post->get_id();
		$titulo = $post->get_titulo();
		$descricao = $post->get_descricao();
		$capa = $post->get_capa();
		$conteudo = $post->get_conteudo();
		$tipo = $post->get_tipo();
		
		$query = "UPDATE posts SET titulo = '".strtoupper($titulo)."', capa = '".$capa."', descricao = '".$descricao."', conteudo = '".$conteudo."', tipo = '".$tipo."' WHERE id = ".$id;
		$resultado = $this->con->query($query) or die ($this->con->error);

		if ($resultado){
			return true;
		}else {
			return false;
		}
	}

	public function increment_visitas($id_post){
		$query = "SELECT visitas FROM posts WHERE id =".$id_post;
		$resultado = $this->con->query($query) or die ($this->con->error);
		
		$n = $resultado->num_rows;
		
		if ($n) {
			
			$visitas = $resultado + 1;

			$query = "UPDATE post SET visitas = $visitas WHERE id= ".$id_post;
			$resultado = $this->con->query($query) or die ($this->con->error);

			if ($resultado){
				return true;
			}
		}

		return false;
	}

	public function verifica_post_by_usuario($id_petiano, $id_post){
		$query = "SELECT * FROM posts WHERE id_petiano = ".$id_petiano." AND id = ".$id_post;
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			return true;
		}else {
			return false;
		}
	}

	public function delete_post($id_post){

		$arq = new ArquivoDAO();
		$arquivos = $arq->get_arquivos_by_post($id_post);
		foreach ($arquivos as $dado) {
			$retorno = $arq->delete_arquivo($dado);
			echo $retorno;
			if(!$retorno){
				return false;
			}
		}

		$arq->arquivoDAO_close();

		$query = "DELETE FROM posts WHERE id = ".$id_post;
		$resultado = $this->con->query($query) or die ($this->con->error);

		if ($resultado){
			return true;
		}else{
			return false;
		}
	}

	public function postDAO_close(){
		return $this->con->close();
	}

}
?>
