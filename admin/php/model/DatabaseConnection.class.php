<?php

class DatabaseConnection {
	private $server;
	private $user;
	private $password;
	private $database;
	private $port;
	private $con;

	public function __construct(){
		$this->server = 'localhost';
		$this->user = 'root';
		$this->password = '';
		$this->database = 'amigos_do_futuro';
		$this->port = 3306;
		
	}

	public function __destruct(){}

	public function connect(){
		$this->con = new mysqli($this->server, $this->user, $this->password, $this->database, $this->port);
		$this->con->set_charset("utf8");
		return $this->con;
	}

}

?>