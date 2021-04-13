//Hace una consulta al modelo que hace la petición al archivo obtenerProductos.ajax.php
class controladorProducts {
    //Hace la petición a mi modelo
    async obtenerProductos(){
        return $.ajax({
            type:"POST",
            url:"vista/assets/js/ajax/obtenerProductos.ajax.php",
        });
    }
}