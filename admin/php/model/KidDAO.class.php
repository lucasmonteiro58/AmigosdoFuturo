<?php

include_once 'Kid.class.php';
include_once 'DatabaseConnection.class.php';

class KidDAO {
	
	private $con;

	public function __construct(){
		$dbConnection = new DatabaseConnection();
		$this->con = $dbConnection->connect();		
	}

	public function __destruct(){}

	public function get_kid_by_id($id){
		$query = "SELECT * FROM Kids WHERE id=".$id;

		$result = $this->con->query($query) or die ($this->con->error);

		$n = $result->num_rows;

		if ($n){
			$data = $result->fetch_array();
			$u = new Kid($data['id'], $data['name'], $data['gender'],$data['age'],$data['city_id'],$data['badge_id'],$data['feedback_id']);
			return $u;
		}else {
			return false;
		}
	}

	//continue
	public function save_kid($id_petiano, $id_pesquisa, $titulo, $descricao, $conteudo, $capa, $tipo) {
		$data = date("Y-m-d H:i:s");
		
		$query = "INSERT INTO posts(id_pesquisa, id_petiano, titulo, descricao, conteudo, data, tipo, visitas) 
		VALUES (".$id_pesquisa.", ".$id_petiano.", '".strtoupper($titulo)."', '".$descricao."', '".$conteudo."', '".$data."', '".$tipo."', 0)";
		$resultado = $this->con->query($query) or die ($this->con->error);

		if ($resultado){
			$atual = $this->get_last_post_by_usuario($id_petiano);
			$id_post = $atual->get_id();

			//Inserir foto capa no banco
			$arq = new ArquivoDAO();
			$retorno = $arq->upload_image($capa, $id_post, true);

			if($retorno == 1){
				//Atualiza caminho da capa no post
				$foto = $arq->get_last_arquivo_by_post($id_post);
				$foto = $foto->get_caminho();
				$atual->set_capa($foto);

				$retorno = $this->update_post($atual);
			}

			$arq->arquivoDAO_close();

			if($retorno){
				return true;
			}else{
				//Deletar post by id
				return false;
			}
		}else{
			return false;
		}		
	}

	public function KidDAO_close(){
		return $this->con->close();
	}

}
?>
