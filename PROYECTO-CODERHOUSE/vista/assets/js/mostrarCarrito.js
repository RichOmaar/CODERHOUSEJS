$(document).ready(function () {
    const idCarritoLocal = JSON.parse(localStorage.getItem("idProduct"));
    //verItemsCarrito(idCarritoLocal);
    console.log(idCarritoLocal);
    verItemsCarrito(idCarritoLocal);
});

const verItemsCarrito = function(idCarritoLocal){ 
        idCarritoLocal.forEach(function(item){
            console.log(item);
        });
}

$("#cards-carrito").append(`<div class="col-12">
                                <div class="row align-items-center mt-3 text-center">
                                    <div class="col-2-xl col-lg-2 col-md-2 p-3">
                                        <img class="" src="vista/assets/images/soap-product.jpg" width="75px">
                                    </div>
                                    <div class="col-6-xl col-6-lg col-md-6 p-3">
                                        <h2>Jason And The Argan Oil</h2>
                                    </div>
                                    <div class="col-1-xl col-1-lg col-md-1 p-3">
                                        <a href="" name="cantidadPlus" id="cantidadPlus"><i class='bx bx-minus minusButton'></i></a>
                                    </div>
                                    <div class="col-1-xl col-1-lg col-md-1 p-3">
                                        <input class="inputCantidad" value="1" type="tel" name="cantidad" id="cantidad">
                                    </div>
                                    <div class="col-1-xl col-1-lg col-md-1 p-3">
                                        <a href="" name="cantidadMinus" id="cantidadMinus"><i class='bx bx-plus plusButton' ></i></a>
                                    </div>
                                    <div class="col-1-xl col-1-lg col-md-1">
                                        <h4>$200</h4>
                                    </div>
                                </div>
                                <hr>
                            </div>`);