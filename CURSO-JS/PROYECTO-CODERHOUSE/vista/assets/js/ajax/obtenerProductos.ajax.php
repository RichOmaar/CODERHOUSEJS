<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

require_once '../../../../modelos/productos.modelo.php';

class obtenerProductosAjax {
    public static function obtenerProductos() {
        $productos = modeloProductos::mdlMostrarProductos();
        if($productos){
            return json_encode($productos);
        } else{
            return '{"response":"error"}';
        }
    }
}
//Siempre dbeo enviar un Json a JS

$respuesta = obtenerProductosAjax::obtenerProductos();
echo $respuesta;

?>