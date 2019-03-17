<?php

include_once 'Feedback.class.php';
include_once 'DatabaseConnection.class.php';

class FeedbackDAO {
	
	private $con;

	public function __construct(){
		$dbConnection = new DatabaseConnection();
		$this->con = $dbConnection->connect();		
	}

	public function __destruct(){}

	public function get_feedback_by_id($id){
		$query = "SELECT * FROM feedbacks WHERE id = '$id'";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$f = new Feedback($data['id'], $data['liked'], $data['text']);
			return $f;
		}else {
			return false;
		}
	}

	public function save_feedback($liked, $text){
		$query = "INSERT INTO feedbacks(liked,`text`) VALUES ('$liked', '$text')";
		$result = $this->con->query($query) or die ($this->con->error);

		if (!$result){
			return false;
		}else {
			$feedback_id = $this->search_feedback($liked, $text);
			return $feedback_id;
		}
	}

	public function search_feedback($liked, $text) {
		$query = "SELECT * FROM feedbacks WHERE `liked`= '$liked' AND `text`= '$text'";
		$result = $this->con->query($query) or die ($this->con->error);
		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$feedback_id = $data['id'];
			return $feedback_id;
		}
	}

	public function feedbackDAO_close(){
		return $this->con->close();
	}
}
?>
