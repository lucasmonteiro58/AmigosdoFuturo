<?php
	include 'php/model/LoginControl.class.php';

	$loginControl = new LoginControl();

	if (!$loginControl->get_logged()){
		header('location: login.php');
	}

?>