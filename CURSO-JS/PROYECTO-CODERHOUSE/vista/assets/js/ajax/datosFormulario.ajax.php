<?php
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(E_ALL);

require_once '../../../../modelos/agregarFormulario.php';

class agregarFormularioAjax{
    public static function agregarFormulario($nombre,$correo,$asunto,$mensaje) {
        $formulario = modeloAgregarFormulario::mdlAgregarFormulario($nombre,$correo,$asunto,$mensaje);
        if($formulario) {
            return '{"response":"success"}';
        } else{
            return '{"response":"error"}';
        }
    }
}


$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$respuesta = agregarFormularioAjax::agregarFormulario($nombre, $correo, $asunto, $mensaje);

echo $respuesta;

?>