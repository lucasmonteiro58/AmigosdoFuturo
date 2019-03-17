<?php

class Feedback {
	
	private $id;
	private $liked;
	private $text;

	public function __construct ($id, $liked, $text){
		$this->id = $id;
		$this->liked = $liked;
		$this->text = $text;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}
	public function get_liked(){
		return $this->liked;
	}
	public function get_text(){
		return $this->text;
	}
}
?>
