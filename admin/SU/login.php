<!DOCTYPE html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700" rel="stylesheet">
  <link rel="icon" href="../img/favicon.ico" sizes="16x16"/>
  <meta charset="utf-8">
  <title>Login</title>
  <link rel="stylesheet" href="SUcss/login.css">
  <script src="../js/jquery.min.js"></script>
</head>
<body>
  <section align="center" class="container">
    <div class="login">
      <h1>Login</h1>

      <form method="post" action="php/control/setLogin.php">
        <p><input class = "form" type="text" name="login" value="" placeholder="E-mail" required ></p>
        <p><input class = "form" type="password" name="password" value="" placeholder="Senha" required></p>
        <p class="remember_me">
          <label>
            <input type="checkbox" name="remember_me" id="remember_me">
            Me lembre neste computador
            <input type="submit" class="botao" value="Login">
          </label>
        </p>
      </form>
      
    </div>

    <div class="login-help">
      <p>Esqueceu sua senha? <a class="alf" href="">Clique aqui para modificá-la</a></p>
      <p> © <?php echo date("Y");?> PETCOMP | UFC </p>
    </div>
  </section>
</body>
</html>
