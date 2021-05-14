//Entregable 1

// Cuadro de diálogo para que ingresen texto
let nombre = prompt("Ingresa tu nombre:");
let edad = prompt("¿Cuántos años tienes?");

if(parseInt(edad) < 1 || parseInt(edad) > 150){

    alert("Tu edad no en válida.");

} else if(parseInt(edad) >= 18 && parseInt(edad) < 60){

    alert("Eres una persona joven y eres mayor de edad.");
    
} else if(parseInt(edad) >= 60 && parseInt(edad) <= 150){
    
    alert("Eres una persona de edad avanzada.");

} else{
    
    alert("Eres una persona joven y eres menor de edad.");

}