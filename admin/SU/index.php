<!DOCTYPE html>
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <meta charset="utf-8">
    <link href="SUcss/home.css" rel="stylesheet">
    <link href="SUcss/main.css" rel="stylesheet">
    <link rel="icon" href="../img/favicon.ico" sizes="16x16"/>
    <script src="../js/jquery.min.js"></script>
  </head>
  <body>
    <?php 
      include "php/control/checksLogin.php";
      include "view/nav.php";
    ?>
    <div class = "post">
        <button class = "new" onclick="location.href='edit.php'" >Nova Postagem</button>
    </div>
    <div id= "publicados" class = "publicados">
      <h1>Publicados:</h1>
      <table>
        <tr>
          <th class="titulo-post">Título</th>
          <th>Última modificação</th>
        </tr>
        <?php include "php/view/postsPublicados.php"; ?>
      </table>
    </div>

    <div id= "rascunhos" class = "rascunhos">
      <h1>Rascunhos:</h1>
      <table>
        <tr>
          <th class="titulo-post">Título</th>
          <th>Última modificação</th>
        </tr>
        <?php include "php/view/postsRascunhos.php"; ?>
      </table>
    </div>

      <?php include "view/confirm-logout.php";?>
      <?php include "view/confirm-delete.php";?>
  <p> © <?php echo date("Y");?> PETCOMP | UFC </p>

  <script src="SUjs/main.js"></script>

  </body>
</php>
