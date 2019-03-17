<?php

include_once 'Kid.class.php';
include_once 'FeedbackDAO.class.php';
include_once 'BadgeDAO.class.php';
include_once 'CityDAO.class.php';
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
	public function get_all_kids(){
		$query = "SELECT * FROM kids";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;
		if ($n){
			while($data = $result->fetch_array()){
				$kids[] = new Kid($data['id'], $data['name'], $data['gender'],$data['age'],$data['city_id'],$data['badge_id'],$data['feedback_id']);
			}
			return $kids;
		} else {
			return false;
		}
	}

	//continue
	//http://localhost/AmigosdoFuturo/admin/php/controller/save_data.php?name=Deb&age=9&gender=Menina&city=Fortaleza&badge=eco&like=Sim&feedback=Gostei
	public function save_kid($name, $age, $city, $gender, $badge, $like, $feedback) {
		//$data = date("Y-m-d H:i:s");
		$badgeDAO = new BadgeDAO();
		$badge_id = $badgeDAO->search_badge_id_by_abrev($badge);
		$badgeDAO->badgeDAO_close();

		$cityDAO = new CityDAO();
		$city_id = $cityDAO->search_city_id_by_name($city);
		$cityDAO->cityDAO_close();

		$feedbackDAO = new FeedbackDAO();
		$feedback_id = $feedbackDAO->save_feedback($like, $feedback);
		$feedbackDAO->feedbackDAO_close();

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

}
?>
