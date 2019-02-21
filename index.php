<!DOCTYPE html>
<html>
<head>
	<title>Amigos do Futuro - Ceará 2050</title>
	<meta charset="utf-8">
	<link rel="shortcut icon" type="image/png" href="img/favicon.ico"/>
	<!-- Bootstrap -->
	<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css">
	<!-- Jquery UI CSS -->
	<link rel="stylesheet" type="text/css" href="vendor/jquery_ui/jquery-ui.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/jquery_ui/jquery-ui.structure.min.css">
	<link rel="stylesheet" type="text/css" href="vendor/jquery_ui/jquery-ui.theme.min.css"> 

	<link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

<?php
if(isset($_GET['section'])) {
    $section = $_GET['section'];

    echo $section;
    if ($section == "form") {
		include 'form.php';
	}
} else {
	echo "oie";
    include 'menu.php';
} ?>

	<!-- Fullscreen Modal -->
	<!-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	  <div class="modal-dialog modal-sm" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
	        <h4 class="modal-title" id="myModalLabel">Iniciar modo tela cheia?</h4>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default" data-dismiss="modal">Não</button>
	        <button id="openFullscreen" type="button" class="btn btn-primary">sim</button>
	      </div>
	    </div>
	  </div>
	</div> -->

</body>
<script type="text/javascript" src="vendor/jquery/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="vendor/jquery_ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/content.js"></script>
<script type="text/javascript" src="js/main.js"></script>
</html>

