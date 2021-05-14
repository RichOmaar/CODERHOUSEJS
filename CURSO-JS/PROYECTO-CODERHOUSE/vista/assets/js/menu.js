window.onload = () => {
    let urlReference = window.location.href;
    let urlSet = urlReference.split('/')[4];
    switch(urlSet) {
        case '':
            let elementProductsEmpty = document.getElementById("menuShop");
            elementProductsEmpty.classList.remove("active");
            let elementContactoEmpty = document.getElementById("menuContacto");
            elementContactoEmpty.classList.remove("active");
            let elementEmpty = document.getElementById("menuNosotros");
            elementEmpty.classList.add("active");
        break;
    
        case '#':
            let elementProductsHash = document.getElementById("menuShop");
            elementProductsHash.classList.remove("active");
            let elementContactoHash = document.getElementById("menuContacto");
            elementContactoHash.classList.remove("active");
            let elementHash = document.getElementById("menuNosotros");
            elementHash.classList.add("active");
        break;
    
        case '#nosotros':
            let elementProductsNosotros = document.getElementById("menuShop");
            elementProductsNosotros.classList.remove("active");
            let elementContactoNosotros = document.getElementById("menuContacto");
            elementContactoNosotros.classList.remove("active");
            let elementNosotros = document.getElementById("menuNosotros");
            elementNosotros.classList.add("active");
        break;
    
        case '#products':
            let elementProductsProducts = document.getElementById("menuNosotros");
            elementProductsProducts.classList.remove("active");
            let elementContactoProducts = document.getElementById("menuContacto");
            elementContactoProducts.classList.remove("active");
            let elementProducts = document.getElementById("menuShop");
            elementProducts.classList.add("active");
        break;
    
        case '#contacto':
            let elementProductsContacto = document.getElementById("menuNosotros");
            elementProductsContacto.classList.remove("active");
            let elementContactoContacto = document.getElementById("menuShop");
            elementContactoContacto.classList.remove("active");
            let elementContacto = document.getElementById("menuContacto");
            elementContacto.classList.add("active");
        break;
    
        default:
            console.error("Hubo un error con el menú");
    }

    const numeroProductos = JSON.parse(localStorage.getItem("idProducto"));
    if(numeroProductos.length > 0){
        $("#menuCarrito span").text(`(${numeroProductos.length})`);
    }
}

const menuNosotros = document.querySelector('#menuNosotros');
console.log(menuNosotros);
menuNosotros.onclick = function() {
    let elementProductsNosotros = document.getElementById("menuShop");
    elementProductsNosotros.classList.remove("active");
    let elementContactoNosotros = document.getElementById("menuContacto");
    elementContactoNosotros.classList.remove("active");
    let elementNosotros = document.getElementById("menuNosotros");
    elementNosotros.classList.add("active");
}

const menuShop = document.querySelector('#menuShop');
menuShop.onclick = function() {
    let elementProductsProducts = document.getElementById("menuNosotros");
    elementProductsProducts.classList.remove("active");
    let elementContactoProducts = document.getElementById("menuContacto");
    elementContactoProducts.classList.remove("active");
    let elementProducts = document.getElementById("menuShop");
    elementProducts.classList.add("active");
}

const menuContacto = document.querySelector('#menuContacto');
menuContacto.onclick = function() {
    let elementProductsContacto = document.getElementById("menuNosotros");
    elementProductsContacto.classList.remove("active");
    let elementContactoContacto = document.getElementById("menuShop");
    elementContactoContacto.classList.remove("active");
    let elementContacto = document.getElementById("menuContacto");
    elementContacto.classList.add("active");
}

const menuCarrito = document.querySelector('#menuCarrito');
console.log(menuCarrito);
menuCarrito.onclick = function() {
    let elementCarritoCarrito = document.getElementById("menuCarrito");
    elementCarritoCarrito.classList.add("active");
    let elementNosotrosCarrito = document.getElementById("menuNosotros");
    elementNosotrosCarrito.classList.remove("active");
    let elementProductsCarrito = document.getElementById("menuShop");
    elementProductsCarrito.classList.remove("active");
    let elementContactoCarrito = document.getElementById("menuContacto");
    elementContactoCarrito.classList.remove("active");
}
// const menuChange = function() {
//     let urlReference = window.location.href;
//     let urlSet = urlReference.split('/')[4];
//     console.log(urlSet);

//     switch(urlSet) {
//         case '':
//             let elementProductsEmpty = document.getElementById("menuShop");
//             elementProductsEmpty.classList.remove("active");
//             let elementContactoEmpty = document.getElementById("menuContacto");
//             elementContactoEmpty.classList.remove("active");
//             let elementEmpty = document.getElementById("menuNosotros");
//             elementEmpty.classList.add("active");
//         break;

//         case '#':
//             let elementProductsHash = document.getElementById("menuShop");
//             elementProductsHash.classList.remove("active");
//             let elementContactoHash = document.getElementById("menuContacto");
//             elementContactoHash.classList.remove("active");
//             let elementHash = document.getElementById("menuNosotros");
//             elementHash.classList.add("active");
//         break;

//         case '#nosotros':
//             let elementProductsNosotros = document.getElementById("menuShop");
//             elementProductsNosotros.classList.remove("active");
//             let elementContactoNosotros = document.getElementById("menuContacto");
//             elementContactoNosotros.classList.remove("active");
//             let elementNosotros = document.getElementById("menuNosotros");
//             elementNosotros.classList.add("active");
//         break;

//         case '#products':
//             let elementProductsProducts = document.getElementById("menuNosotros");
//             elementProductsProducts.classList.remove("active");
//             let elementContactoProducts = document.getElementById("menuContacto");
//             elementContactoProducts.classList.remove("active");
//             let elementProducts = document.getElementById("menuShop");
//             elementProducts.classList.add("active");
//         break;

//         case '#contacto':
//             let elementProductsContacto = document.getElementById("menuNosotros");
//             elementProductsContacto.classList.remove("active");
//             let elementContactoContacto = document.getElementById("menuShop");
//             elementContactoContacto.classList.remove("active");
//             let elementContacto = document.getElementById("menuContacto");
//             elementContacto.classList.add("active");
//         break;

//         default:
//             console.error("Hubo un error con el menú");
//     }
// }


/*
<nav class="font" onclick="menuChange()">
    <input type="checkbox" id="check">
    <label for="check" class="checkbtn">
        <i class='bx bx-menu' ></i>
    </label>
    <a href="#">
        <img class="menu-logo" src="vista/assets/images/aria_logo_01.svg" alt="">
    </a>
    <ul class="fixed-menu" id="mainMenu">
        <!-- <li><a href="#" class="active">Descubre</a></li> -->
        <li><a href="#nosotros" class="active">Nosotros</a></li>
        <li><a href="#products">Shop</a></li>
        <li><a href="#contacto">Contacto</a></li>
        <!-- <li><a href="#"><i class='bx bx-cart-alt menu-icon font'></i>Carrito</a></li>
        <li><a href="#"><i class='bx bx-user menu-icon font'></i>Mi cuenta</a></li> -->
        <li><a href="#"><i class='bx bx-cart-alt menu-icon'></i></a></li>
        <li><a href="#"><i class='bx bx-user menu-icon'></i></a></li>
    </ul>
</nav> */

// if(urlSet == '' || urlSet == '#' || urlSet == '#nosotros'){
//     let firstLiEmpty = document.createElement("li");
//     let firstAEmpty = document.createElement("a");
//     firstAEmpty.setAttribute("href","#nosotros")
//     firstAEmpty.setAttribute("class","active");
//     firstAEmpty.textContent = "Nosotros";
//     firstLiEmpty.appendChild(firstAEmpty);

//     let secondLiEmpty = document.createElement("li");
//     let secondAEmpty = document.createElement("a");
//     secondAEmpty.setAttribute("href","#products");
//     secondAEmpty.textContent = "Shop";
//     secondLiEmpty.appendChild(secondAEmpty);

//     let thirdLiEmpty = document.createElement("li");
//     let thirdAEmpty = document.createElement("a");
//     thirdAEmpty.setAttribute("href","#contacto");
//     thirdAEmpty.textContent = "Contacto";
//     thirdLiEmpty.appendChild(thirdAEmpty);

//     let fourthLiEmpty = document.createElement("li");
//     let firstIconEmpty = document.createElement("i");
//     firstIconEmpty.setAttribute("class","bx bx-cart-alt menu-icon");
//     fourthLiEmpty.appendChild(firstIconEmpty);

//     let fifthLiEmpty = document.createElement("li");
//     let secondIconEmpty = document.createElement("i");
//     secondIconEmpty.setAttribute("class","bx bx-user menu-icon");
//     fifthLiEmpty.appendChild(secondIconEmpty);

//     document.querySelector("#mainMenu");

// } else if(urlSet == '#nosotros') {
//     let firstLiNosotros = document.createElement("li");
//     let firstANosotros = document.createElement("a");
//     firstANosotros.setAttribute("href","#nosotros")
//     firstANosotros.setAttribute("class","active");
//     firstANosotros.textContent = "Nosotros";
//     firstLiNosotros.appendChild(firstANosotros);

//     let secondLiNosotros = document.createElement("li");
//     let secondANosotros = document.createElement("a");
//     secondANosotros.setAttribute("href","#products");
//     secondANosotros.textContent = "Shop";
//     secondLiNosotros.appendChild(secondANosotros);

//     let thirdLiNosotros = document.createElement("li");
//     let thirdANosotros = document.createElement("a");
//     thirdANosotros.setAttribute("href","#contacto");
//     thirdANosotros.textContent = "Contacto";
//     thirdLiNosotros.appendChild(thirdANosotros);

//     let fourthLiNosotros = document.createElement("li");
//     let firstIconNosotros = document.createElement("i");
//     firstIconNosotros.setAttribute("class","bx bx-cart-alt menu-icon");
//     fourthLiNosotros.appendChild(firstIconNosotros);

//     let fifthLiNosotros = document.createElement("li");
//     let secondIconNosotros = document.createElement("i");
//     secondIconNosotros.setAttribute("class","bx bx-user menu-icon");
//     fifthLiNosotros.appendChild(secondIconNosotros);

//     document.querySelector("#mainMenu");

// } else if(urlSet == '#products') {

//     let firstLiProducts = document.createElement("li");
//     let firstAProducts = document.createElement("a");
//     firstAProducts.setAttribute("href","#nosotros")
//     firstAProducts.textContent = "Nosotros";
//     firstLiProducts.appendChild(firstAProducts);

//     let secondLiProducts = document.createElement("li");
//     let secondAProducts = document.createElement("a");
//     secondAProducts.setAttribute("href","#products");
//     secondAProducts.setAttribute("class","active");
//     secondAProducts.textContent = "Shop";
//     secondLiProducts.appendChild(secondAProducts);

//     let thirdLiProducts = document.createElement("li");
//     let thirdAProducts = document.createElement("a");
//     thirdAProducts.setAttribute("href","#contacto");
//     thirdAProducts.textContent = "Contacto";
//     thirdLiProducts.appendChild(thirdAProducts);

//     let fourthLiProducts = document.createElement("li");
//     let firstIconProducts = document.createElement("i");
//     firstIconProducts.setAttribute("class","bx bx-cart-alt menu-icon");
//     fourthLiProducts.appendChild(firstIconProducts);

//     let fifthLiProducts = document.createElement("li");
//     let secondIconProducts = document.createElement("i");
//     secondIconProducts.setAttribute("class","bx bx-user menu-icon");
//     fifthLiProducts.appendChild(secondIconProducts);

//     document.querySelector("#mainMenu");

// } else if(urlSet == '#contacto') {
//     console.log(urlSet);

//     let firstLiContacto = document.createElement("li");
//     let firstAContacto = document.createElement("a");
//     firstAContacto.setAttribute("href","#nosotros")
//     firstAContacto.setAttribute("class","active");
//     firstAContacto.textContent = "Nosotros";
//     firstLiContacto.appendChild(firstAContacto);

//     let secondLiContacto = document.createElement("li");
//     let secondAContacto = document.createElement("a");
//     secondAContacto.setAttribute("href","#products");
//     secondAContacto.textContent = "Shop";
//     secondLiContacto.appendChild(secondAContacto);

//     let thirdLiContacto = document.createElement("li");
//     let thirdAContacto = document.createElement("a");
//     thirdAContacto.setAttribute("href","#contacto");
//     thirdAContacto.setAttribute("class","active");
//     thirdAContacto.textContent = "Contacto";
//     thirdLiContacto.appendChild(thirdAContacto);

//     let fourthLiContacto = document.createElement("li");
//     let firstIconContacto = document.createElement("i");
//     firstIconContacto.setAttribute("class","bx bx-cart-alt menu-icon");
//     fourthLiContacto.appendChild(firstIconContacto);

//     let fifthLiContacto = document.createElement("li");
//     let secondIconContacto = document.createElement("i");
//     secondIconContacto.setAttribute("class","bx bx-user menu-icon");
//     fifthLiContacto.appendChild(secondIconContacto);

//     document.querySelector("#mainMenu");

// }