<?php 
  include "php/control/checksLogin.php";
  $n_arquivos=9;
?>

<!DOCTYPE html>
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="SUcss/edit.css" rel="stylesheet">
    <link href="SUcss/main.css" rel="stylesheet">
    <link rel="icon" href="../img/favicon.ico" sizes="16x16"/>
    <script src="../js/tinymce/tinymce.min.js"></script>
    <script src="../js/tinymce/tinymce.js"></script>
    <script src="../js/jquery.min.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <?php
      include "view/nav.php";
      include "view/confirm-logout.php";
      include "view/file-alarm.php";
      include "php/view/editPost.php";
    ?>
    <script src="SUjs/functions.js"></script>
    <script src="SUjs/main.js"></script>
    <p> © <?php echo date("Y");?> PETCOMP | UFC </p>
  </body>
</html>

