const handleAddToCart =() => {
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("productQuantity");


    const name = productName.value;
    const quantity = productQuantity.value;

    handleSetToLocalStorage(name,quantity)
    displayProduct(name, quantity)

    productName.value = "";
    productQuantity.value = "";
}


const displayProduct = (productName, productQuantity) => {
    const productContainer = document.getElementById("product-container");

    const li = document.createElement("li");
    li.innerText = `${productName} : ${productQuantity}`;

    productContainer.appendChild(li)
}

const getProductToLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem("cart");

    if (getProduct){
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const saveProductToLocalStorage = (productName,quantity) => {
    
}



