<?php

class Tag {
	
	private $id;
	private $nome;

	public function __construct ($id, $nome){
		$this->id = $id;
		$this->nome = $nome;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}

	public function get_nome(){
		return $this->nome;
	}

}
?>
