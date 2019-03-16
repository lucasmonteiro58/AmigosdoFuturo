<?php
	include_once "../model/KidDAO.class.php";

	session_start();

	$name = $_GET['name'];
	$age = $_GET['age'];
	$city = $_GET['city'];
	$gender = $_GET['gender'];
	$badge = $_GET['badge'];
	$like = $_GET['like'];
	$feedback = $_GET['feedback'];

	$result = false;
	
	$kidDAO = new KidDAO();
	$result = $kidDAO->save_kid($name, $age, $city, $gender, $badge, $like, $feedback);
	$kidDAO->kidDAO_close();
	

	if ($result) {
		//$_SESSION["debug"] = "Sent to server.";
		header('location: views/mei_0.html');
	} else {
		//$_SESSION["debug"] = "ERROR to send to server.";
		header('location: views/mei_1.html');
	}

?>