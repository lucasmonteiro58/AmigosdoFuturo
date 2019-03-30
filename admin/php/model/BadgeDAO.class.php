<?php

include_once 'Badge.class.php';
include_once 'DatabaseConnection.class.php';

class BadgeDAO {
	
	private $con;

	public function __construct(){
		$dbConnection = new DatabaseConnection();
		$this->con = $dbConnection->connect();		
	}

	public function __destruct(){}

	public function get_badge_by_id($id){
		$query = "SELECT * FROM badges WHERE id = '$id'";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$b = new Badge($data['id'], $data['name'], $data['description'], $data['img']);
			return $b;
		}else {
			return false;
		}
	}

	public function get_all_badges(){
		$query = "SELECT * FROM badges";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;
		if ($n){
			while($data = $result->fetch_array()){
				$badges[] = new Badge($data['id'], $data['name'], $data['description'], $data['img']);
			}
			return $badges;
		} else {
			return false;
		}
	}

	public function search_badge_id_by_abrev($badge_abreviation){
		$query = "SELECT * FROM badges WHERE abreviation='$badge_abreviation'";
		$result = $this->con->query($query) or die ($this->con->error);
		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$badge_id = $data['id'];
			return $badge_id;
		}else {
			return false;
		}
	}

	public function badgeDAO_close(){
		return $this->con->close();
	}
}
?>
