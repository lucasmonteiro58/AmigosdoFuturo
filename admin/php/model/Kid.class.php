<?php

class Kid {
	
	private $id;
	private $name;
	private $gender;
	private $age;
	private $city_id;
	private $badge_id;
	private $feedback_id;

	public function __construct ($id, $name, $gender, $age, $city_id, $badge_id, $feedback_id){
		$this->id = $id;
		$this->name = $name;
		$this->gender = $gender;
		$this->age = $age;
		$this->city_id = $city_id;
		$this->badge_id = $badge_id;
		$this->feedback_id = $feedback_id;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}
	public function get_name(){
		return $this->name;
	}
	public function get_gender(){
		return $this->gender;
	}
	public function get_age(){
		return $this->age;
	}
	public function get_city_id(){
		return $this->city_id;
	}
	public function get_badge_id(){
		return $this->badge_id;
	}
	public function get_feedback_id(){
		return $this->feedback_id;
	}
}
?>
