<?php

include_once 'DatabaseConnection.class.php';

class GeneralDAO {
	
	private $con;

	public function __construct(){
		$dbConnection = new DatabaseConnection();
		$this->con = $dbConnection->connect();		
	}

	public function __destruct(){}

	public function get_number_access_by_year($year){
		$query = "SELECT * FROM general WHERE year = '$year'";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$total_access_year = $data['number_access'];
			return $total_access_year;
		}else {
			return false;
		}
	}


	public function get_number_access_total(){
		$query = "SELECT * FROM general";

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;
		if ($n){
			$total_access = 0;
			while($data = $result->fetch_array()){
				$total_access += $data['number_access'];
			}
			return $total_access;
		} else {
			return false;
		}
	}

	public function increment_access(){
		$actual_year = date("Y");

		$number_access_actual_year = $this->get_number_access_by_year($actual_year);

		$number_access_actual_year += 1;

		$query = "UPDATE general SET number_access = '$number_access_actual_year' WHERE year = $actual_year";

		$result = $this->con->query($query) or die ($this->con->error);
		if ($result){
			return $number_access_actual_year;
		}
		return false;
	}

	public function count_access(){
		$actual_year = date("Y");

		$number_access_actual_year = $this->get_number_access_by_year($actual_year);

		if ($number_access_actual_year){
			return $number_access_actual_year;
		}
		return false;
	}

	public function generalDAO_close(){
		return $this->con->close();
	}
}
?>
