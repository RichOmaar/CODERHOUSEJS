//Arreglos
alert(`Para ver la creación del objeto por favor abrir la consola y dar click en el botón "Crear" o "Borrar"`)
class Soap {

    constructor(image,tittle,price,description) {
        this.image = image;
        this.tittle = tittle;
        this.price = price;
        this.description = description;
    }

    showImage() {
        console.log(this.image);
    }

    finalPrice(soapAmount) {
        let total = soapAmount * this.price;
        console.log(total);
    }
}

class Client {

    constructor(name,lastName,email,country) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.country = country;
    }

    showClient () {
        console.log(this.name);
        console.log(this.lastName);
        console.log(this.email);
        console.log(this.country);
    }
    
    showCountry () {
        console.log(this.country);
    }
}

const arrayClients = [];

const createClient = function () {

    do{
        let name = prompt("Ingresa tu nombre:");
        let lastName = prompt("Ingresa tu apellido:");
        let email = prompt("Ingresa tu email:");
        let country = prompt("Ingresa tu país:");
    
        arrayClients.push(new Client(name,lastName,email,country));
        console.table(arrayClients);
    
        if(arrayClients.length > 2){
    
            let data = prompt("Con base en la tabla anterior selecciona el número de usuario que deseas conocer:");
    
            console.log(arrayClients[data]);
        
            let specificData = prompt("Selecciona con un número que deseas conocer: (1)Nombre,(2)Apellido,(3)Email,(4)País:");
        
            switch(specificData) {
                case '1':
                    console.log(arrayClients[data].name);
                break;
                    
                case '2':
                    console.log(arrayClients[data].lastName);
                break;
                    
                case '3':
                    console.log(arrayClients[data].email);
                break;
                    
                case '4':
                    console.log(arrayClients[data].country);
                break;
                
                default:
                    console.log("Error");
            }
        }
    } while(arrayClients.length <= 2);
}

const deleteClient = function() {
    console.table(arrayClients);
    
    let drop = prompt("Selecciona el número del registro que deseas eliminar:");
    
    let index = 0;
    
    arrayClients.splice(index,drop);
    
    console.table(arrayClients);

}

const orderBy = function() {
    if(arrayClients.length <= 2){
        alert("Aún no existen datos para utilizar esta función. Por favor dá click en el botón de crear");
    } else{
        let option = prompt("Selecciona la opción de ordenamiento que deseas: (1)Ascendente, (2)Descendente, (3)Aleatorio");

        switch(option) {
            case '1':
                // console.table(arrayClients.sort(function(a, b){return a-b}));
                console.table(arrayClients.sort());
            break;

            case '2':
                console.table(arrayClients.reverse());
            break;

            case '3':
                const shuffle = arrayClients.sort(() => Math.random() - 0.5);
                console.table(shuffle);
            break;

            default:
                console.log("Error");
        }
    }
}
