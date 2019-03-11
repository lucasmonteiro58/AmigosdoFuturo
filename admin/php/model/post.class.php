<?php

class Post {
	
	private $id;
	private $id_pesquisa;
	private $id_petiano;
	private $titulo;
	private $descricao;
	private $capa;
	private $conteudo;
	private $data;
	private $tipo;
	private $visitas;

	public function __construct ($id, $id_pesquisa, $id_petiano, $titulo, $descricao, $capa, $conteudo, $data, $tipo, $visitas){
		$this->id = $id;
		$this->id_pesquisa = $id_pesquisa;
		$this->id_petiano = $id_petiano;
		$this->titulo = $titulo;
		$this->descricao = $descricao;
		$this->capa = $capa;
		$this->conteudo = $conteudo;
		$this->data = $data;
		$this->tipo = $tipo;
		$this->visitas = $visitas;
	}

	public function __destruct(){}

	public function get_id(){
		return $this->id;
	}

	public function get_id_pesquisa(){
		return $this->id_pesquisa;
	}

	public function set_id_pesquisa($dado){
		$this->id_pesquisa = $dado;
	}

	public function get_id_petiano(){
		return $this->id_petiano;
	}

	public function set_id_petiano($dado){
		$this->id_petiano = $dado;
	}

	public function get_titulo(){
		return $this->titulo;
	}

	public function set_titulo($dado){
		$this->titulo = $dado;
	}

	public function get_descricao(){
		return $this->descricao;
	}

	public function set_descricao($dado){
		$this->descricao = $dado;
	}

	public function get_capa(){
		return $this->capa;
	}

	public function set_capa($dado){
		$this->capa = $dado;
	}

	public function get_conteudo(){
		return $this->conteudo;
	}

	public function set_conteudo($dado){
		$this->conteudo = $dado;
	}

	public function get_data(){
		return $this->data;
	}

	public function set_data($dado){
		$this->data = $dado;
	}

	public function get_tipo(){
		return $this->tipo;
	}

	public function set_tipo($dado){
		$this->tipo = $dado;
	}

	public function get_visitas(){
		return $this->visitas;
	}

	public function set_visitas($dado){
		$this->visitas = $dado;
	}
}
?>
