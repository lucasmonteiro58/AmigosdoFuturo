<?php
	include '../model/GeneralDAO.class.php';

	$generalDAO = new GeneralDAO();

	echo '{ "total_access" : '.$generalDAO->increment_access().'}';

	$generalDAO->generalDAO_close();


?>