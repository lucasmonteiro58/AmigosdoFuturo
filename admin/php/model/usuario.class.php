<?php

class Usuario {
	
	private $id;
	private $nome;
	private $curso;
	private $email;
	private $foto;
	private $id_pesquisa;

	public function __construct ($id, $nome, $curso, $email, $foto, $id_pesquisa){
		$this->id = $id;
		$this->nome = $nome;
		$this->curso = $curso;
		$this->email = $email;
		$this->foto = $foto;
		$this->id_pesquisa = $id_pesquisa;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}

	public function get_nome(){
		return $this->nome;
	}

	public function get_curso(){
		return $this->curso;
	}

	public function get_email(){
		return $this->email;
	}

	public function get_foto(){
		return $this->foto;
	}

	public function get_pesquisa(){
		return $this->id_pesquisa;
	}

}
?>
