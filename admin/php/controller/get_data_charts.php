<?php
	include 'php/model/KidDAO.class.php';
	
	if(isset($_GET['pagina'])){
		$pagina = $_GET['pagina'];

		$p = new PostDAO();
		
		$posts = $p->get_posts_by_page($pagina);
		$qtd = $p->get_qtd_all_pages();

		$p->postDAO_close();

	}
	elseif (isset($_GET['busca'])) {
		$chave = $_GET['busca'];

		$p = new PostDAO();

		$posts = $p->get_posts_by_search($chave);		
		$qtd = $p->get_qtd_pages_by_search($chave);
	
		$p->postDAO_close();
	}
	else{
		//Erro
	}
?>