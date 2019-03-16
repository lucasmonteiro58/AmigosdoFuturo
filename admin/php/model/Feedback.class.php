<?php

class Feedback {
	
	private $id;
	private $like;
	private $text;

	public function __construct ($id, $like, $text){
		$this->id = $id;
		$this->like = $like;
		$this->text = $text;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}
	public function get_like(){
		return $this->like;
	}
	public function get_text(){
		return $this->text;
	}
}
?>
