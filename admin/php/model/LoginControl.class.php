<?php
include_once 'DatabaseConnection.class.php';

class LoginControl {

	private $logged;

	public function __construct(){
		session_start();
		if($_SESSION['user_logged']){
			$this->logged = $_SESSION['user_logged'];
		}else{
			$this->logged = false;
		}
	}

	public function __destruct(){}

	public function login($email, $password){
		// $password_crip = sha1($password);
		$password_crip = $password;

		$dbConnection = new DatabaseConnection();
		$con = $dbConnection->connect();

		$query = "SELECT id, first_name, last_name FROM Users WHERE (email ='".$email."') AND password='".$password_crip."'";
		$result = $con->query($query);

		$user = $result->num_rows;

		if ($user){
			$data = $result->fetch_array();

			$_SESSION["user_id"] = $data["id"];
			$_SESSION["user_first_name"] = $data["first_name"];
			$_SESSION["user_last_name"] = $data["last_name"];
			$_SESSION["user_logged"] = true;
			$this->logged = true;
		}
		$con->close();
	}

	public function get_logged(){
		return $this->logged;
	}

	public function logout(){
		session_unset();
		session_destroy();
	}
}
?>
