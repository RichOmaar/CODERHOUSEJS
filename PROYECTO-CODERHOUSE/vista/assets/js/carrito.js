//Obtener la lista de productos
const listaProducts = document.querySelector("#products");
listaProducts.addEventListener('click', agregarProductCarrito);
let idSelectedLocalStorage = [];

function agregarProductCarrito(e) {
    e.preventDefault();
    //Verificar si se hizo click en el botón de agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const cardProduct = e.target.parentElement.parentElement.parentElement.parentElement;
        const productId = cardProduct.getAttribute('data.id');
        if((localStorage.hasOwnProperty("idProducto"))){
            idSelectedLocalStorage = JSON.parse(localStorage.getItem("idProducto")) || [];
            let agregadoCarrito = idSelectedLocalStorage.includes(productId);
            if(!agregadoCarrito){
                idSelectedLocalStorage.push(productId);
                console.log(idSelectedLocalStorage);
                localStorage.setItem("idProducto", JSON.stringify(idSelectedLocalStorage));
                agregarId(productId);
            } 
        } else{
            idSelectedLocalStorage.push(productId);
            localStorage.setItem("idProducto", JSON.stringify(idSelectedLocalStorage));
            // idSelectedLocalStorage = JSON.parse(localStorage.getItem("idProducto")) || [];
            agregarId(productId);
        }
    }
}

let carritoStorageLocal = [];
const idSelected = [];

function agregarId(id){
    idSelected.push(id);
    const carritoData = new controladorCarritoProductos();
    //Consultar el elemento en localstorage y el arreglo ponerlo vacío o con el nuevo objeto
    carritoStorageLocal = JSON.parse(localStorage.getItem("products")) || [];
    carritoData.obtenerCarritoProducto(id).then((respuesta) => {
        let _respuesta = JSON.parse(respuesta);
        let imagen = _respuesta.urlImagen;
        let nombre = _respuesta.nombre;
        let descripcion = _respuesta.descripcion;
        let precio = _respuesta.precio;
        let destacado = _respuesta.destacados;
        let stock = _respuesta.stock;
        carritoStorageLocal.push(new Product(imagen,nombre,descripcion,precio,destacado,stock));
        localStorage.setItem("products", JSON.stringify(carritoStorageLocal));
    });
}
