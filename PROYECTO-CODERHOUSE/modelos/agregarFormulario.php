<?php

require_once 'conexion.php';

class modeloAgregarFormulario {
    public static function mdlAgregarFormulario($nombre,$correo,$asunto,$mensaje){
        $db = new Conexion();
        $conexion = $db -> get_connection();
        $sql = "INSERT INTO formularioCOntacto SET nombre = :nombre, correo = :correo, asunto = :asunto, mensaje = :mensaje";
        $statement = $conexion -> prepare($sql);
        $statement -> bindParam(":nombre",$nombre);
        $statement -> bindParam(":correo",$correo);
        $statement -> bindParam(":asunto",$asunto);
        $statement -> bindParam(":mensaje",$mensaje);
        $statement -> execute();
        return $statement;
    }
}

?>