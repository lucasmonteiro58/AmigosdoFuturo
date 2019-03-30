<?php
	include 'php/model/KidDAO.class.php';
	
	if(isset($_GET['type'])){
		$type = $_GET['type']
		$kidDAO = new KidDAO();

		switch ($type) {
			case 'bar':
				$data = $kidDAO->get_data_chart_bar();
				echo $data;
				break;
			default:
				# code...
				break;
		}
		$kidDAO->kidDAO_close();
	}
?>