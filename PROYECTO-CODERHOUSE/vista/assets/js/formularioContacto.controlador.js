class controladorFormularioContacto{
    async insertarDatosFormulario(datos) {
        return $.ajax({
            data:datos,
            type:"POST",
            url:"vista/assets/js/ajax/datosFormulario.ajax.php",
        });
    }
}