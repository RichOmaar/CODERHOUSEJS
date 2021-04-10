<?php

require_once 'conexion.php';

class modeloProductos {

    public static function mdlMostrarProductos(){
        $db = new Conexion();
        $conexion = $db -> get_connection();
        $sql = "SELECT * FROM productos";
        $statement = $conexion -> prepare($sql);
        $statement -> execute();
        return ($statement->rowCount() > 0) ? $statement->fetchAll(PDO::FETCH_ASSOC) : false;
    }
    
}
?>