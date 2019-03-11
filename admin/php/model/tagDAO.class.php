<?php

include_once 'tag.class.php';
include_once 'controleConexao.class.php';

class TagDAO {
	
	private $con;

	public function __construct(){
		$controleConexao = new controleConexao();
		$this->con = $controleConexao->conexao();		
	}

	public function __destruct(){}

	public function get_tag_by_id($id) {
		$query = "SELECT * FROM tags WHERE id=".$id;
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			$dado = $resultado->fetch_array();
			$u = new Tag($dado['id'], $dado['nome']);
			
			return $u;
		}else {
			return false;
		}	
	}

	public function get_tag_by_nome($nome) {
		$query = "SELECT * FROM tags WHERE nome='$nome'";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			$dado = $resultado->fetch_array();
			$u = new Tag($dado['id'], $dado['nome']);
			
			return $u;
		}else {
			return false;
		}		
	}

	public function get_all_tags() {
		$query = "SELECT * FROM tags";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			while($dado = $resultado->fetch_array()){
				$u[] = new Tag($dado['id'], $dado['nome']);
			}

			return $u;
		}else {
			return false;
		}		
	}

	public function get_tags_by_post($id_post) {
		$query = "SELECT * FROM tags, posts_tags WHERE id = id_tag AND id_post='".$id_post."'";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			while($dado = $resultado->fetch_array()){
				$u[] = new Tag($dado['id'], $dado['nome']);
			}

			return $u;
		}else {
			return false;
		}		
	}

	public function tagDAO_close(){
		return $this->con->close();
	}
}
?>