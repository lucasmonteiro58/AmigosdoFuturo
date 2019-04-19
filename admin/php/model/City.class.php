<?php

class City {
	
	private $id;
	private $name;
	private $region;
	private $region_abrev;

	public function __construct ($id, $name, $region, $region_abrev){
		$this->id = $id;
		$this->name = $name;
		$this->region = $region;
		$this->region_abrev = $region_abrev;
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
	public function get_region_abrev(){
		return $this->region_abrev;
	}
}
?>
