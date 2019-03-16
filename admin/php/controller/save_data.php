<?php
	include_once "../model/KidDAO.class.php";

	session_start();

	$name = $_POST['name'];
	$age = $_POST['age'];
	$city = $_POST['city'];
	$gender = $_POST['gender'];
	$badge = $_POST['badge'];
	$like = $_POST['like'];
	$feedback = $_POST['feedback'];

	$result = false;
	
	$kidDAO = new KidDAO();
	$result = $kidDAO->save_kid($name, $age, $city, $gender, $badge, $like, $feedback);
	$kidDAO->kidDAO_close();
	

	if ($result) {
		//echo "Sent to server.";
	} else {
		//echo "ERROR to send to server.";
	}

?>