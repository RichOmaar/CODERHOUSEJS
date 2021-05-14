class controladorCarritoProductos {
    async obtenerCarritoProducto(idProducto) {
        const data = {
            "idProducto":idProducto
        }
        return $.ajax({
            url:"vista/assets/js/ajax/obtenerProductoCarrito.ajax.php",
            data:data,
            type:"POST",
        });
    }
}