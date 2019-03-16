<?php

include_once 'Kid.class.php';
include_once 'DatabaseConnection.class.php';

class KidDAO {
	
	private $con;

	public function __construct(){
		$dbConnection = new DatabaseConnection();
		$this->con = $dbConnection->connect();		
	}

	public function __destruct(){}

	public function get_kid_by_id($id){
		$query = "SELECT * FROM kids WHERE id = '$id'";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$u = new Kid($data['id'], $data['name'], $data['gender'],$data['age'],$data['city_id'],$data['badge_id'],$data['feedback_id']);
			return $u;
		}else {
			return false;
		}
	}

	//continue
	//http://localhost/AmigosdoFuturo/admin/php/controller/save_data.php?name=Deb&age=9&gender=Menina&city=Fortaleza&badge=eco&like=Sim&feedback=Gostei
	public function save_kid($name, $age, $city, $gender, $badge, $like, $feedback) {
		//$data = date("Y-m-d H:i:s");
		$badge_id = $this->search_badge_id($badge);
		$city_id = $this->search_city_id($city);
		$feedback_id = $this->save_feedback($like, $feedback);

		if (!$badge_id || !$city_id || !$feedback_id) {
			return false;
		}

		if ($gender == "Menino") {
			$gender = "M";
		} else if ($gender == "Menina") {
			$gender = "F";
		}

		$query = "INSERT INTO kids(name, gender, age, badge_id, city_id, feedback_id) VALUES ('$name', '$gender', '$age', '$badge_id', '$city_id', '$feedback_id')";

		$result = $this->con->query($query) or die ($this->con->error);

		if ($result){
			return true;
		}else{
			return false;
		}		
	}

	public function KidDAO_close(){
		return $this->con->close();
	}

	public function search_badge_id($badge_abreviation){
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
	public function search_city_id($city_name){
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
	public function save_feedback($like, $text){
		$query = "INSERT INTO feedbacks(liked,`text`) VALUES ('$like', '$text')";
		$result = $this->con->query($query) or die ($this->con->error);

		if (!$result){
			return false;
		}else {
			$query = "SELECT * FROM feedbacks WHERE `text`= '$text'";
			$result = $this->con->query($query) or die ($this->con->error);
			$n = $result->num_rows;

			if ($n){
				$data = $result->fetch_array();
				$feedback_id = $data['id'];
				return $feedback_id;
			}
		}
	}

}
?>
