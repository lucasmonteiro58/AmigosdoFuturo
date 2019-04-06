<?php
  // Go to login if not user in session
  include "php/controller/checks_login.php";
  
  if(isset($_SESSION["user_first_name"]))
      $user_name = $_SESSION["user_first_name"]." ".$_SESSION["user_last_name"];
  else
      $user_name = "No user";
?>


<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="shortcut icon" type="image/png" href="../img/favicon.ico"/>


  <title>Dashboard - Amigos do Futuro - Ceará 2050</title>

  <!-- Custom fonts for this template-->
  <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template-->
  <link href="css/sb-admin-2.min.css" rel="stylesheet">

  <!-- Estilo sobreposto ao template -->
  <link rel="stylesheet" type="text/css" href="css/custom.css">

</head>

<body id="page-top">

  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Include sidebar -->
    <?php include "php/view/sidebar.php"; ?>

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Include topbar -->
        <?php include "php/view/topbar.php"; ?>

        <!-- Begin Page Content -->
        <div class="container-fluid">


          <?php include "php/view/resume.php"; ?>

          <?php include "php/view/charts.php"; ?>
          
        </div>
        <!-- /.container-fluid -->

      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span> Copyright &copy; Amigos do Futuro <?php echo date("Y");?></span>
          </div>
        </div>
      </footer>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Include logout_modal -->
  <?php include "php/view/logout_modal.php"; ?>

 <script src="js/variables.js"></script>

  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="js/sb-admin-2.min.js"></script>

  <!-- Page level plugins -->
  <script src="vendor/chart.js/Chart.min.js"></script>

  <script src="js/get-chart-data.js"></script>
  
  <!-- Page level custom scripts -->
  <script src="js/demo/chart-area-demo.js"></script>
  <script src="js/demo/chart-age-polar.js"></script>
  <script src="js/demo/chart-badges-bar.js"></script>
  <script src="js/demo/chart-gender-pie.js"></script>

  <script type="text/javascript">
  $("#general-tab").removeClass("active")  
  $("#index-tab").addClass("active")    
  </script>
</body>

</html>
