<?php

include_once 'usuario.class.php';
include_once 'controleConexao.class.php';

class UsuarioDAO {

	private $con;

	public function __construct(){
		$controleConexao = new controleConexao();
		$this->con = $controleConexao->conexao();		
	}

	public function __destruct(){}

	public function get_usuario_by_id($id) {
		$query = "SELECT * FROM petianos WHERE id=".$id;
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			$dado = $resultado->fetch_array();
			$u = new Usuario($dado['id'], $dado['nome'], $dado['curso'], $dado['email'], $dado['foto'], $dado['id_pesquisa']);
			
			return $u;
		}else {
			return false;
		}	
	}

	public function get_usuario_by_nome($nome) {
		$query = "SELECT * FROM petianos WHERE nome='$nome'";
		$resultado = $this->con->query($query) or die ($this->con->error);

		$n = $resultado->num_rows;

		if ($n){
			$dado = $resultado->fetch_array();
			$u = new Usuario($dado['id'], $dado['nome'], $dado['curso'], $dado['email'], $dado['foto'], $dado['id_pesquisa']);
			
			return $u;
		}else {
			return false;
		}		
	}

	public function usuarioDAO_close(){
		return $this->con->close();
	}

}


?>