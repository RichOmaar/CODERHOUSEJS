const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputSubject = document.querySelector("#inputSubject");
const inputTextarea = document.querySelector("#inputTextarea");
const contactForm = document.querySelector("#contact-form");
const listP = document.querySelector("#warning");
const answers = [];
//Esta función envía los datos captados por el formulario a la base de datos.
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    
    let nombre = inputName.value;
    
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let correo = inputEmail.value;
    // Este if valida que los caracteres ingresados en el input correspondan a un correo verdadero.
    if(!regexEmail.test(correo)){
        return alert("Ingresa un correo válido");
    }

    let asunto = inputSubject.value;
    let mensaje = inputTextarea.value;
    let datos = {
        "nombre":nombre,
        "correo":correo,
        "asunto":asunto,
        "mensaje":mensaje
    }
    //Se envia los datos al controlador para insertar los datos a la base de datos.
    let ctrFormularioContacto = new controladorFormularioContacto();
    ctrFormularioContacto.insertarDatosFormulario(datos).then((respuesta)=>{
        let _respuesta = JSON.parse(respuesta);
        if(_respuesta.response == "success"){
            sayThanks();
            setTimeout(deleteThanks,10000);
            contactForm.reset();
        }
    });
});

const sayThanks = function() {
    thanks = document.createElement("p");
    thanks.textContent = `Gracias, tu mensaje se ha enviado con éxito. Nos pondremos en contacto contigo en cuanto antes.`;
    thanks.setAttribute("class","warning");
    thanks.setAttribute("id","thanksParragraph");
    listP.appendChild(thanks);
}

const deleteThanks = function() {
    let thanksParragraph = document.querySelector("#thanksParragraph");
    listP.removeChild(thanksParragraph);
}