<?php
	include '../model/LoginControl.class.php';
	
	$loginControl = new LoginControl();
	$loginControl->logout();
	
	header('location: ../../login.php');
?>