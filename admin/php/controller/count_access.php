<?php
	include '../model/GeneralDAO.class.php';

	$generalDAO = new GeneralDAO();

	echo '{ "access" : '.$generalDAO->increment_access().'}';

	$generalDAO->generalDAO_close();


?>