<?php

class Conexion {
    public function get_connection(){ 
        $user = "root";
        $pass = "root";
        $host = "localhost";
        $db = "ariamx";
        $connection = new PDO("mysql:host={$host}; dbname={$db};", $user, $pass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        return ($connection);
    }
}
//ESto lo ten
class Response implements JsonSerializable {
    protected $status;  
    protected $message; 

    public function __construct(array $data) {
        $this->status = $data['status'];       
        $this->message = $data['message'];       
    }

    public function jsonSerialize() {
        return [
            'status'   => $this->status,
            'message' => $this->message
        ];
    }
}

class ResponseNews implements JsonSerializable {
    protected $status;  
    protected $news; 

    public function __construct(array $data) {
        $this->status = $data['status'];       
        $this->news = $data['news'];       
    }

    public function jsonSerialize() {
        return [
            'status'   => $this->status,
            'news' => $this->news
        ];
    }
}

?>