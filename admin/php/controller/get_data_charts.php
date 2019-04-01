<?php
	include '../model/KidDAO.class.php';
	
	if(isset($_GET['type'])){
		$type = $_GET['type'];

		$kidDAO = new KidDAO();
		switch ($type) {
			case 'bar':
				$data = $kidDAO->get_kids_with_badge();
				echo $data;
				break;
			default:
				break;
		}
		$kidDAO->kidDAO_close();
	}
?>