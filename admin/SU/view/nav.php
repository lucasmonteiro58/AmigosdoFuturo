<div class="header">
  <a href="index.php">
  <img src="../img/logo.png">
  </a>
  <a class="eve" id ="l"><span class="glyphicon glyphicon-log-out"></span></a>
</div>

<script type="text/javascript">
	$(function(){
    $('#l').click(function(){
        $('.confirm-logout').show("slow");
        $('.want-logout').show();
	    });
	});
</script>