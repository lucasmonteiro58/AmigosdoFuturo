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
			case 'age':
				$data = $kidDAO->get_ages_data();
				echo $data;
				break;
			case 'total_users':
				$data = $kidDAO->get_number_of_kids();
				echo $data;
				break;
			case 'region_users':
				$data = $kidDAO->get_kids_in_region();
				echo $data;
				break;
			case 'city_users':
				$data = $kidDAO->get_kids_in_city();
				echo $data;
				break;
			case 'city_ages':
				if(isset($_GET['city'])){
					$city = $_GET['city'];
					$data = $kidDAO->get_city_ages_data($city);
					echo $data;
				}
				break;
			default:
				break;
		}
		$kidDAO->kidDAO_close();
	}
?>