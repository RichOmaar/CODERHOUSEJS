<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

require_once '../../../../modelos/productos.modelo.php';

class obtenerProductoCarritoAjax {
    public static function obtenerProductoCarrito($idProducto){
        $productoCarrito = modeloProductos::mdlMostarProductoCarrito($idProducto);
        if($productoCarrito){
            return json_encode($productoCarrito);
        } else{
            return '{"response":"error"}';
        }
    }
}

$idProducto = $_POST['idProducto'];

$respuesta = obtenerProductoCarritoAjax::obtenerProductoCarrito($idProducto);

echo $respuesta;

?>