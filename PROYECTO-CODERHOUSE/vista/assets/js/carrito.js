//Obtener la lista de productos
const listaProducts = document.querySelector("#products");
listaProducts.addEventListener('click', agregarProductCarrito);

function agregarProductCarrito(e) {
    e.preventDefault();
    //Verificar si se hizo click en el botón de agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const cardProduct = e.target.parentElement.parentElement.parentElement.parentElement;
        const productId = cardProduct.getAttribute('data.id');
        if((localStorage.hasOwnProperty("idProducto"))){
            let idSelectedLocalStorage = JSON.parse(localStorage.getItem("idProducto"));
            let agregadoCarrito = idSelectedLocalStorage.includes(productId);
            if(!agregadoCarrito){
                localStorage.setItem("idProducto", JSON.stringify(productId));
                agregarId(productId);
            } 
        } else{
            localStorage.setItem("idProducto", JSON.stringify(productId));
            let idSelectedLocalStorage = JSON.parse(localStorage.getItem("idProducto"));
            agregarId(productId);
        }
    }
}

const carritoStorageLocal = [];
const idSelected = [];

function agregarId(id){
    idSelected.push(id);
    localStorage.setItem("idProducto", JSON.stringify(idSelected));
    const carritoData = new controladorCarritoProductos();
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
