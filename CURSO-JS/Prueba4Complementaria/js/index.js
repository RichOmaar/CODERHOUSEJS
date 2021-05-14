//Desafío complementario

let figura = prompt("Eligle con un número al figura de la cual deseas obtener el área, perímetro y voluem: (1) Cuadrado,(2) Rectángulo.");

if(parseInt(figura) && parseInt(figura) >= 1 && parseInt(figura) <= 2){

    const area = function(lado1,lado2) {

        let resultado = lado1 * lado2;

        return resultado;

    } 

    const perimetro = function(lado1,lado2) {

        let resultado = (lado1 * 2) + (lado2 * 2);

        return resultado;

    }

    const volumenCuadrado = function(lado1) {

        let resultado = Math.pow(lado1,3);

        return resultado;

    }

    const volumenRectangulo = function(lado1,lado2,lado3) {

        let resultado = lado1 * lado2 * lado3;

        return resultado;

    }

    switch(figura){

        case '1':

            let ladoC1 = prompt("Ingresa la medida de un vértice del cuadrado");

            let respuestaArea = area(ladoC1,ladoC1);
            let respuestaPerimetro = perimetro(ladoC1,ladoC1);
            let respuestaVolumen = volumenCuadrado(ladoC1);
            console.log(respuestaArea);
            console.log(respuestaPerimetro);
            console.log(respuestaVolumen);

            alert(`El área del cuadrado es de ${respuestaArea}, el perímetro es de ${respuestaPerimetro} y el volumen es de ${respuestaVolumen}`);

        break;
        
        case '2':

            let ladoR1 = prompt("Ingresa la medida del primer vértice del rectángulo");
            let ladoR2 = prompt("Ingresa la medida del segundo vértice del rectángulo");
            let ladoR3 = prompt("Ingresa la altura del rectángulo");

            if(parseInt(ladoR1) != parseInt(ladoR2)) {

                let respuestaArea = area(ladoR1,ladoR2);
                let respuestaPerimetro = perimetro(ladoR1,ladoR2);
                let respuestaVolumen = volumenRectangulo(ladoR1,ladoR2,ladoR3);
                console.log(respuestaArea);
                console.log(respuestaPerimetro);
                console.log(respuestaVolumen);

                alert(`El área del rectángulo es de ${respuestaArea}, el perímetro es de ${respuestaPerimetro} y el volumen es de ${respuestaVolumen}`);

            } else{

                alert("Los valores ingresados no corresponden a las medidas de un rectángulo");

            }

        break;

        default:
            
            alert("Ha ocurrido un error");

        break;
        
    }

} else{

    alert("El valor ingresado no corresponde a ninguna de las opciones");

}