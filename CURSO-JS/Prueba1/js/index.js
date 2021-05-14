//Entregable 1

// Cuadro de diálogo para que ingresen texto
let nombre = prompt("Ingresa tu nombre:");

if(String(nombre) > 0){
    
    console.log("No es texto");
    alert("El nombre ingresao no es texto");
    
} else{
    
    let nacimiento = prompt(("Ingresa el año en que naciste:"));
    
    let edadFinal = 2021 - parseInt(nacimiento);
    
    console.log(nombre);
    console.log(nacimiento);
    console.log(edadFinal);

    if(edadFinal > 2021 || edadFinal > 150){
    
        console.log("La edad no está dentro de los rangos válidos");
        
        alert("Tu edad no es válida");
    
    } else{
        
        //Muestra un alert con el nombre que guardamos del cuado de diálogo
        alert("Bienvenido "+nombre+", tu edad es de aproximadamente "+edadFinal+" años.");

    }    

}
