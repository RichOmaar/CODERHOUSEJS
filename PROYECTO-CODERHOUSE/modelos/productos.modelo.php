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

    public static function mdlMostarProductoCarrito($idProducto){
        $db = new Conexion();
        $conexion = $db -> get_connection();
        $sql = "SELECT * FROM productor WHERE id_producto = :idProducto";
        $statement = $conexion -> prepare($sql);
        $statement -> bindParam(':idProducto',$idProducto);
        $statement -> execute();
        return ($statement->rowCount() > 0) ? $statement->fetchAll(PDO::FETCH_ASSOC) : false;
    }
    
}
?>