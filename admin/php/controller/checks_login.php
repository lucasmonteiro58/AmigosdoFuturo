<?php
	include 'php/model/controleLogin.class.php';

	$controleLogin = new ControleLogin();

	if (!$controleLogin->get_logado()){
		header('location: login.php');
	}

?>