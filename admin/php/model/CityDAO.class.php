<?php

include_once 'City.class.php';
include_once 'DatabaseConnection.class.php';

class CityDAO {
	
	private $con;

	public function __construct(){
		$dbConnection = new DatabaseConnection();
		$this->con = $dbConnection->connect();		
	}

	public function __destruct(){}

	public function get_city_by_id($id){
		$query = "SELECT * FROM cities WHERE id = '$id'";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$c = new City($data['id'], $data['name'], $data['region'], $data['region_abrev']);
			return $c;
		}else {
			return false;
		}
	}

	public function get_all_cities(){
		$query = "SELECT * FROM cities";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;
		if ($n){
			while($data = $result->fetch_array()){
				$cities[] = new City($data['id'], $data['name'], $data['region'],$data['region_abrev']);
			}
			return $cities;
		} else {
			return false;
		}
	}

	public function search_city_id_by_name($city_name){
		$query = "SELECT * FROM cities WHERE name='$city_name'";
		$result = $this->con->query($query) or die ($this->con->error);
		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$city_id = $data['id'];
			return $city_id;
		}else {
			return false;
		}
	}

	public function cityDAO_close(){
		return $this->con->close();
	}
}
?>
