<?php
 session_start();

  if(isset($_SESSION["debug"]))
      $debug = $_SESSION["debug"];
  else
      $debug = "No debug";
?>

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
	<div id="main-div-content">

	<section id="menu"> 
	  <div class="ceara2050-btn"><a href="http://www.ceara2050.ce.gov.br/" target="_blank"><img src="img/menu/logoceara2050.png"></a></div>
	  <div class="sound-btn"><button class="toggle sound"></button></div>
	  <ul class="centered menu-content">
		<li><img src="img/menu/logo.png" class="menu-img" alt="Amigos do futuro logo" title="Amigos do Futuro"></li>

		<li><button id="start-game" class="play-btn start"></button></li>

		<li><div id="counter">000000</div></li>
		<li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua.</p></li>
		</ul>

	</section>

	<!-- Fullscreen Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
	</div>

	</div>

	<h4>Debug-> <?php echo $debug; ?></h4>

</body>

<script type="text/javascript" src="vendor/jquery/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="vendor/jquery_ui/jquery-ui.min.js"></script>
<script type="text/javascript" src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="vendor/html2canvas/html2canvas.min.js"></script>
<script type="text/javascript" src="js/content.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/desafios.js"></script>
</html>
