let operacion = prompt("Ingresa el número de la operación deseada: (1)Suma (2)Resta (3)Multiplicación (4)División (5)Tabla de multiplicar");

if(parseInt(operacion) && parseInt(operacion) >= 1 && parseInt(operacion) <= 5){

    switch(operacion) {
    
        case '1':
    
            let numero1 = Number(prompt("Ingresa el primer valor: "));
    
            if(parseInt(numero1)){
                
                let numero2 = Number(prompt("Ingresa el segundo valor: "))
    
                if(parseInt(numero2)){
    
                    resultado = numero1+numero2;
    
                    alert("El resultado de la suma es: " + resultado);
    
                } else{
    
                    alert("El valor agregado no es un número");
    
                }
    
            } else{
    
                alert("El valor agregado no es un número");
    
            }
    
        break;
    
        case '2':
    
            let resta1 = Number(prompt("Ingresa el primer valor: "));
    
            if(parseInt(resta1)){
                
                let resta2 = Number(prompt("Ingresa el segundo valor: "))
    
                if(parseInt(resta2)){
    
                    resultado = resta1-resta2;
    
                    alert("El resultado de la resta es: " + resultado);
    
                } else{
    
                    alert("El valor agregado no es un número");
    
                }
    
            } else{
    
                alert("El valor agregado no es un número");
    
            }
    
        break;
    
        case '3':

            let multiplicacion1 = Number(prompt("Ingresa el primer valor: "));
    
            if(parseInt(multiplicacion1)){
                
                let multiplicacion2 = Number(prompt("Ingresa el segundo valor: "))
    
                if(parseInt(multiplicacion2)){
    
                    resultado = multiplicacion1*multiplicacion2;
    
                    alert("El resultado de la multiplicación es: " + resultado);
    
                } else{
    
                    alert("El valor agregado no es un número");
    
                }
    
            } else{
    
                alert("El valor agregado no es un número");
    
            }

        break;
    
        case '4':

            let division1 = Number(prompt("Ingresa el primer valor: "));
    
            if(parseInt(division1)){
                
                let division2 = Number(prompt("Ingresa el segundo valor: "))
    
                if(parseInt(division2)){
    
                    resultado = division1/division2;
    
                    alert("El resultado de la división es: " + resultado);
    
                } else{
    
                    alert("El valor agregado no es un número");
    
                }
    
            } else{
    
                alert("El valor agregado no es un número");
    
            }

        break;

        case '5':

            let tabla = Number(prompt("Ingresa que tabla quieres concoer: "));
    
            if(parseInt(tabla)){
                
                let rango = Number(prompt("Ingresa hasta que número desea que llegue la tabla: "))
    
                if(parseInt(rango)){
    
                    alert("Por favor da click en el botón " + '"Aceptar"' + " y revisa el resultado en la consola");

                    for(let i = 1; i <= rango; i++){

                        resultado = tabla*i;
                        
                        console.log(`${tabla} x ${i} = ${resultado}`);

                    }
    
                } else{
    
                    alert("El valor agregado no es un número");
    
                }
    
            } else{
    
                alert("El valor agregado no es un número");
    
            }

        break;
    
        default:

            alert("Ha ocurrido un error");

        break;
    
    }

} else{

    alert("El valor ingresado no corresponde a ninguna de las opciones");

}