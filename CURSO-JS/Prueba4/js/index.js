//alert("Deslizate sobre la página para conocer los productos. Para ingresar la cantidad de productos deseada presiona el botón "+'"Comprar" que se encuentra en la parte inferior');

let total = function() {

    let jabon = prompt("Ingresa la cantidad de JABONES INDIVIDUALES que deseas");
    let resultadoIndividual = individuales(jabon);
    
    let paquete = prompt("Ingresa la cantidad de PAQUETES de jabones que deseas");
    let resultadoPaquetes = paquetes(paquete);
 
    let total = parseFloat(resultadoIndividual)+parseFloat(resultadoPaquetes);
    total = total.toFixed(2);

    alert(`El total de tu pedido con impustos incluídos sería de $${total}, INDIVIDUALES: ${jabon} a $18 = $${resultadoIndividual}, PAQUETES: ${paquete} a $25 = $${resultadoPaquetes}`);
    
}

function individuales(cantidadIndiviual) {

    if(parseInt(cantidadIndiviual) >= 0) {

        let neto = cantidadIndiviual*18;

        respuesta = impuesto(neto);

        respuesta = respuesta.toFixed(2);

        return respuesta;
    }

}

function paquetes(cantidadPaquetes) {

    if(parseInt(cantidadPaquetes) >= 0) {

        let neto = cantidadPaquetes*25;

        respuesta = impuesto(neto);

        respuesta = respuesta.toFixed(2);

        return respuesta;
    }

}

function impuesto(cantidad) {

    let total = cantidad*1.16;
    
    return total;

}