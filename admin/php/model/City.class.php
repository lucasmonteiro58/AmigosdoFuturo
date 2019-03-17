<?php

class City {
	
	private $id;
	private $name;
	private $region;

	public function __construct ($id, $name, $region){
		$this->id = $id;
		$this->name = $name;
		$this->region = $region;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}
	public function get_name(){
		return $this->name;
	}
	public function get_region(){
		return $this->region;
	}
}
?>
