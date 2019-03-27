<?php
	include_once "../model/KidDAO.class.php";

	session_start();

	$name = $_GET['name'];
	$age = $_GET['age'];
	$city = $_GET['city'];
	$gender = $_GET['gender'];
	$badge = $_GET['badge'];
	$liked = $_GET['liked'];
	$feedback = $_GET['feedback'];

	$result = false;
	
	$kidDAO = new KidDAO();
	$result = $kidDAO->save_kid($name, $age, $city, $gender, $badge, $liked, $feedback);
	$kidDAO->kidDAO_close();
	

	if ($result) {
		//echo "Sent to server.";
	} else {
		//echo "ERROR to send to server.";
	}

?>