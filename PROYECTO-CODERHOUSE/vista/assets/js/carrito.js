//Obtener la lista de productos
const listaProducts = document.querySelector("#products");
listaProducts.addEventListener('click', agregarProductCarrito);

function agregarProductCarrito(e) {
    e.preventDefault();
    //Verificar si se hizo click en el botón de agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const cardProduct = e.target.parentElement.parentElement.parentElement.parentElement;
        const productId = cardProduct.getAttribute('data.id');

        agregarId(productId);
    }
}

//Arreglo para guardar los id de los productos seleccionados.
const idSelected = [];

function agregarId(id){
    if(idSelected.length > 0){
        if(idSelected.includes(id)){
            console.log(`El elemento ${id} existe`);
            // console.log(idSelected);
        } else{
            idSelected.push(id);
        }
    } else{
        idSelected.push(id);
    }
    //Guardar en local storage los productos seleccionados.
    localStorage.setItem("idProduct",idSelected);
}

