const inputName = document.querySelector("#inputName");
const inputEmail = document.querySelector("#inputEmail");
const inputSubject = document.querySelector("#inputSubject");
const inputTextarea = document.querySelector("#inputTextarea");
const contactForm = document.querySelector("#contact-form");
const listP = document.querySelector("#warning");
const answers = [];

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    
    let nombre = inputName.value;
    // answers.push(inputName.value);
    
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let correo = inputEmail.value;
    if(!regexEmail.test(correo)){
        return alert("Ingresa un correo válido");
    } else{
        // answers.push(inputEmail.value);
    }

    let asunto = inputSubject.value;
    // answers.push(inputSubject.value);
    let mensaje = inputTextarea.value;
    // answers.push(inputTextarea.value);
    let datos = {
        "nombre":nombre,
        "correo":correo,
        "asunto":asunto,
        "mensaje":mensaje
    }
    
    let ctrFormularioContacto = new controladorFormularioContacto();
    ctrFormularioContacto.insertarDatosFormulario(datos).then((respuesta)=>{
        let _respuesta = JSON.parse(respuesta);
        if(_respuesta.response == "success"){
            sayThanks();
            setTimeout(deleteThanks,10000);
            contactForm.reset();
        }
    })
    // console.log(answers);
    // localStorage.setItem("formularioContacto", JSON.stringify(answers));
    
    // contactForm.reset();
    
    // sayThanks();
    // setTimeout(deleteThanks,10000);


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