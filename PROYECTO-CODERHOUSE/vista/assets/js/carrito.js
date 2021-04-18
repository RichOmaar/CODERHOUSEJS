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
        // if(!localStorage.hasOwnProperty("idProduct")){
        //     const idCarritoLocal = JSON.parse(localStorage.getItem("idProduct"));
        //     let i = 0;
        //     idCarritoLocal.forEach(element => {
        //         i++;
        //         console.log(i);
        //     });
        // } else{

        // }
    }
}

//Arreglo para guardar los id de los productos seleccionados.
// const _idSelected = [];

function agregarId(id){
    if(localStorage.hasOwnProperty("idProduct")){
        const _idSelected = JSON.parse(localStorage.getItem("idProduct"));
    
        if(!(_idSelected === null)){
            if(_idSelected.includes(id)){
                console.log(`El elemento ${id} existe`);
                // console.log(idSelected);
            } else{
                _idSelected.push(id);
            }
        } else{
            const _idSelected = [];
            _idSelected.push(id);
        }
        localStorage.setItem("idProduct",JSON.stringify(_idSelected));
    } else{
        const _idSelected = [];
        _idSelected.push(id);
        localStorage.setItem("idProduct",JSON.stringify(_idSelected));
    }
    //Guardar en local storage los productos seleccionados.
}
