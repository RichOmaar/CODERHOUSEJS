$(document).ready(function () {
    const idCarritoLocal = localStorage.getItem("idProduct");
    console.log(idCarritoLocal);
    if(localStorage.hasOwnProperty("idProduct")){
        if(idCarritoLocal === null){
            carritoVacio();
        } else{
            const idCarritoLocal = JSON.parse(localStorage.getItem("idProduct"));
            verItemsCarrito(idCarritoLocal);
        }
    } else{
        carritoVacio();
    }
});

let precioTotal = 0;
function totalPrecio(precio){
    precioTotal = parseFloat(precio) + parseFloat(precioTotal)
}

// Muestra los productos guardados en el carrito
const verItemsCarrito = function(idCarritoLocal){ 
    let arraySize = Object.keys(idCarritoLocal).length;
    let total = 0;
    for(let i = 0; i<arraySize; i++){
        const carritoData = new controladorCarritoProductos();
        // Se realiza la consulta a la base de datos y espera a tener una respuesta para continuar con el proceso
        carritoData.obtenerCarritoProducto(idCarritoLocal[i]).then((respuesta) => {
            let _respuesta = JSON.parse(respuesta);
            let imagen = _respuesta.urlImagen;
            let nombre = _respuesta.nombre;
            let descripcion = _respuesta.descripcion;
            let precio = _respuesta.precio;
            let destacados = _respuesta.destacados;
            totalPrecio(precio);
            // precioTotal = parseFloat(precioTotal) + parseFloat(precio);
            // console.log(precioTotal);
            // total = parseFloat(total)+parseFloat(precio);
            // Creación del HTML para cada producto del carrito 
            $("#cards-carrito").append(`<div class="col-12" data.id="${_respuesta.id_producto}">
                                            <div class="row align-items-center mt-3 text-center font carrito-card">
                                                <div class="col-2-xl col-lg-2 col-md-2 col-sm-6 col-6 p-3">
                                                    <img class="" src="${imagen}" width="75px">
                                                </div>
                                                <div class="col-5-xl col-5-lg col-md-5 col-sm-6 col-6 p-3">
                                                    <h2 class="font font-color font-light">${nombre}</h2>
                                                </div>
                                                <div class="col-1-xl col-1-lg col-md-1 col-sm-3 col-3 p-3">
                                                    <a name="eliminar" id="eliminar"><i class='bx bx-trash font-color deleteButton'></i></a>
                                                </div>
                                                <div class="col-1-xl col-1-lg col-md-1 col-sm-3 col-3 p-3">
                                                    <a href="" name="cantidadPlus" id="cantidadPlus"><i class='bx bx-minus minusButton font-color'></i></a>
                                                </div>
                                                <div class="col-1-xl col-1-lg col-md-1 col-sm-3 col-3 p-3 font font-color">
                                                    <input class="inputCantidad" value="1" type="tel" name="cantidad" id="cantidad">
                                                </div>
                                                <div class="col-1-xl col-1-lg col-md-1 col-sm-3 col-3 p-3">
                                                    <a href="" name="cantidadMinus" id="cantidadMinus"><i class='bx bx-plus plusButton font-color' ></i></a>
                                                </div>
                                                <div class="col-1-xl col-1-lg col-md-1">
                                                    <h4 class="font font-color font-light">$${precio}</h4>
                                                </div>
                                            </div>
                                            <hr>
                                        </div>`);
                                    });
                                }
                                // let result = totalPrecio(idCarritoLocal);
                                console.log(precioTotal);
}

const carritoVacio = function(){
    $("#cards-carrito").append(`<div class="text-center font pt-3 pb-5" d-block>
                                    <h4>Aún no has agregado productos a tu carrito</h4>
                                </div>`);
}

