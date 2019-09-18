<?php
	include '../model/LoginControl.class.php';

	$email = $_POST['email'];
	$password = $_POST['password'];

	$loginControl = new LoginControl();
	$loginControl->login($email, $password);

	if ($loginControl->get_logged()){
		header('location: ../../index.php');
	}
	else {
		header('location: ../../index.php');
		
		
	}

?>
