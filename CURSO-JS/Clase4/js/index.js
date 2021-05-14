//Funciones

function suma(numero1,numero2) {
    
    resultado = parseInt(numero1)+parseInt(numero2);
    
    alert(`El resultado de la suma es: ${resultado}`);
    
}

let numero1 = prompt("Ingresa un número");
let numero2 = prompt("Ingresa un segundo número")

suma(numero1,numero2);