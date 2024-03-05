////// Could this be cleaned up with for loops

let price = document.getElementById("price");

price.addEventListener("click", clickPrice);

function clickPrice() {
    console.log("Hau ab!");
}

let blogEmbed = document.getElementById("blog-embed");
let shopEmbed = document.getElementById("shop-embed");

let blogLink = document.getElementById("blog-link");
let shopLink = document.getElementById("shop-link");

blogEmbed.addEventListener("change", onChange);
shopEmbed.addEventListener("change", onChange);

blogLink.addEventListener("change", onChange);
shopLink.addEventListener("change", onChange);

let priceNow = document.getElementById("price-now");
let ordereNow = document.getElementById("order-now");

function onChange() {

    shopEmbed.checked || blogEmbed.checked
        ? contact()
        : order();
}

function order() {
    priceNow.innerText = "ORDER NOW"; ordereNow.innerText = "599€";
}

function contact() {
    priceNow.innerText = "CONTACT"; ordereNow.innerText = ":)";
}

///////// Now beings the code to get at the radio buttons

let blogCheck = document.getElementById("blog-check");

blogCheck.addEventListener("change", onChangeBlog);
function onChangeBlog(){

    blogCheck.checked === true ? enabeBlogRadios() : disableBlogRadios();
}

function enabeBlogRadios(){
    onChange();
    blogLink.disabled = false;
    blogEmbed.disabled = false;}

function disableBlogRadios(){
    order();
    blogLink.disabled = true;
    blogEmbed.disabled = true;}
    let shopCheck = document.getElementById("shop-check");

    shopCheck.addEventListener("change", onChangeShop);
function onChangeShop(){

    shopCheck.checked === true ? enabeShopRadios() : disableShopRadios();
}

function enabeShopRadios(){
    onChange();
    shopLink.disabled = false;
    shopEmbed.disabled = false;}

function disableShopRadios(){
    order();
    shopLink.disabled = true;
    shopEmbed.disabled = true;
}


