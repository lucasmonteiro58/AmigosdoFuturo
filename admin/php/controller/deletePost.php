<?php
	include_once '../model/postDAO.class.php';
	
	session_start();

	if (isset($_SESSION['id_usuario']) AND isset($_GET['del'])) {
		
		$id_usuario = $_SESSION['id_usuario'];
		$id = $_GET['del'];

		$post = new PostDAO();

		$retorno = false;
		$retorno = $post->verifica_post_by_usuario($id_usuario, $id);

		if ($retorno) {
			$post->delete_post($id);
		}

		$post->postDAO_close();
	}

	header('location: ../../index.php');
?>