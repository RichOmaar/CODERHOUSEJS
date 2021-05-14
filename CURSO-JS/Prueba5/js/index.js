//Objetos
alert(`Para ver la creación del objeto por favor abrir la consola y dar click en el botón "Comprar"`)
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

const createSoap = function() {
 
    let image = prompt("Ingresa el url de la imagen: ");
    let tittle = prompt("Ingresa el nombre del producto: ");
    let price = prompt("Ingresa el precio del jabón: ");
    let description = prompt("Ingresa una descripción del producto: ");

    if(parseFloat(price) > 0){

        let soap1 = new Soap(image,tittle,price,description);
    
        if(soap1) {
    
            console.log(soap1);
            
            let option = prompt("Selecciona una de las siguientes opciones (Con número): (1)Conocer la url de la imágen, (2)Cuenta total de jabones.");

            switch(option){

                case '1':

                    soap1.showImage();

                break;

                case '2':

                    let amount = prompt(`Ingresa la cantidad de jabones: `);
                    soap1.finalPrice(amount);

                break;
            
            }

        } else {
    
            console.log(soap1);
    
        }

    } else {

        console.log(soap1);

    }

}

