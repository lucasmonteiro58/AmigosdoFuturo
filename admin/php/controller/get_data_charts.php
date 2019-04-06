<?php
	include '../model/KidDAO.class.php';
	
	if(isset($_GET['type'])){
		$type = $_GET['type'];

		$kidDAO = new KidDAO();
		switch ($type) {
			case 'user_badges':
				$data = $kidDAO->get_kids_with_badge();
				echo $data;
				break;
			case 'gender':
				$data = $kidDAO->get_gender_data();
				echo $data;
				break;
			default:
				break;
		}
		$kidDAO->kidDAO_close();
	}
?>