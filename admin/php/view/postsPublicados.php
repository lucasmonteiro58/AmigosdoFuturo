<?php
	include_once "php/model/postDAO.class.php";

	$posts = new PostDAO();
	$publicado = $posts->get_posts_publicados_by_usuario($_SESSION['id_usuario']);
	$posts->postDAO_close();

	if($publicado != false){
		foreach ($publicado as $dado) {
			$id = $dado->get_id();
			$titulo = $dado->get_titulo();
			$data = $dado->get_data();	
?>

<tr>
	<form method="POST" action="edit.php">
		<td style="display:none;"><input type="number" name="post" value="<?= $id ?>" style="display:none;" readonly></td>
		<td><a class="link" href = ""><?= $titulo ?></a></td>
		<td><?= $data ?></td>
		<td><button class="btn1"><span class="glyphicon glyphicon-eye-open"></span>&nbsp&nbspVer</button></td>
		<td><button class="btn2"><span class="glyphicon glyphicon-pencil"></span>&nbsp&nbspEditar</button></td>
		<td><button class="btn3"><span class="glyphicon glyphicon-trash"></span>&nbsp&nbspExcluir</button></td>
	</form>
</tr>

<?php
		}
	}
?>