class controladorCarritoProductos {
    async obtenerCarritoProducto(idProducto) {
        return $.ajax({
            url:"vista/assets/js/ajax/obtenerProductoCarrito.ajax.php",
            data:idProducto,
            type:"POST",
        });
    }
}