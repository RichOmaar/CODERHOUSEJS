const soapProducts = JSON.parse(localStorage.getItem("products"));

soapProducts.forEach (Element => {
    
    let firstContainer = document.createElement("div");
    firstContainer.setAttribute("class","col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-5 font animations");
    
    let mainImage = document.createElement("img");
    mainImage.setAttribute("src",`${Element.image}`);
    mainImage.setAttribute("class","border-image-product");
    mainImage.setAttribute("width","100%");
    firstContainer.appendChild(mainImage); 

    let secondContainer = document.createElement("div");
    secondContainer.setAttribute("class","card");
    firstContainer.appendChild(secondContainer);
    
    let thirdContainer = document.createElement("div");
    thirdContainer.setAttribute("class","prod-1 align-items-center mt-3 text-center");
    secondContainer.appendChild(thirdContainer);

    let soapTitle = document.createElement("h5");
    soapTitle.textContent = `${Element.soapName}`;
    thirdContainer.appendChild(soapTitle);

    let fourthContainer = document.createElement("div");
    fourthContainer.setAttribute("class","mt-3 d-block info");
    thirdContainer.appendChild(fourthContainer);

    let firstSpan = document.createElement("span");
    firstSpan.setAttribute("class","d-block text-left p-3");
    firstSpan.textContent = `${Element.soapDescription}`;
    fourthContainer.appendChild(firstSpan);

    let fifthContainer = document.createElement("div");
    fifthContainer.setAttribute("class","text-left pl-3 text-dark");
    fifthContainer.setAttribute("style","font-weight: bold;");
    thirdContainer.appendChild(fifthContainer);

    let secondSpan = document.createElement("span");
    secondSpan.textContent = `$${Element.price} MXN`;
    fifthContainer.appendChild(secondSpan);

    let sixthContainer = document.createElement("div");
    sixthContainer.setAttribute("class","p-3 text-center mt-3 cursor");
    secondContainer.appendChild(sixthContainer);

    let anchorButton = document.createElement("a");
    anchorButton.setAttribute("href","#");
    sixthContainer.appendChild(anchorButton);

    let cartButton = document.createElement("span");
    cartButton.setAttribute("class","text-uppercase");
    cartButton.setAttribute("style","color: #373d31;");
    cartButton.textContent = "Agregar al carrito";
    anchorButton.appendChild(cartButton);

    document.querySelector("#products").appendChild(firstContainer);

});




// <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 pb-5 font">
//     <img src="vista/assets/images/soap-product.jpg" alt="" class="border-image-product" width="100%">
//     <div class="card">
//         <div class="prod-1 align-items-center mt-3 text-center">
            
//             <h5>Jabón de carbón activado</h5>
            
//             <div class="mt-3 d-block info">
//                 <span class="d-block text-left p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
//             </div>

//             <div class="text-left pl-3 text-dark" style="font-weight: bold;">
//                 <span>$100.00</span>
//             </div>

//         </div>

//         <div class="p-3 text-center mt-3 cursor">
//             <a href=""><span class="text-uppercase" style="color: #373d31;">Agregar al carrito</span></a>
//         </div>

//     </div>
// </div>
