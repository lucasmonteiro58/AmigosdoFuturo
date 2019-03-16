<?php

class Badge {
	
	private $id;
	private $name;
	private $description;
	private $img;

	public function __construct ($id, $name, $description, $img){
		$this->id = $id;
		$this->name = $name;
		$this->description = $description;
		$this->img = $img;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}
	public function get_name(){
		return $this->name;
	}
	public function get_description(){
		return $this->description;
	}
	public function get_img(){
		return $this->img;
	}
}
?>
