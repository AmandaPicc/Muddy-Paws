productArr = []

//Product class for the product purchased
class Product {
	constructor(type, color, size) {
        this.type = type
        this.color = color
        this.size = size
    }
}    

//Pull purchased products from local storage
function loadCartContents() {
    var loadedProductArr = localStorage.getItem('cart')
    productArr = JSON.parse(loadedProductArr)

    loadCart()
    UpdateCartNumber(productArr.length)
}

//Display items in cart
function loadCart() {
    var listOfProducts = document.getElementsByClassName('listOfProducts')
    if(listOfProducts.length < 1) return
    listOfProducts[0].innerHTML = "";
    for(var i = 0; i < productArr.length; i++) {
        var product = productArr[i]
        listOfProducts[0].innerHTML += '<div>Type: ' + product.type + ' Color: ' + product.color + ' Size: ' + product.size + '</div>'
        listOfProducts[0].innerHTML += '<span onclick="removeFromCart(' + i + ')">[click to delete]</span>'
        listOfProducts[0].innerHTML += '<br /><br /><br />'
    }
}

//Ability to remove items from cart
function removeFromCart(index) {
    productArr.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(productArr))
    loadCart()
    UpdateCartNumber(productArr.length)
}

//Add items to cart
function addToCart(type) {
    var color = document.getElementById('productColor').value
    var size = document.getElementsByName('size')
    var selectedSize = 'unselected';
    for(var i = 0; i < size.length; i++) {
        if(size[i].checked) {
            selectedSize = size[i].value;
        }
    }

    if(selectedSize == 'unselected') {
        alert("Please select a size.")
        return;
    }

    var quantity = parseInt(document.getElementById('quantity').value)
    for(var i = 0; i < quantity; i++) {
        var product = new Product(type, color, selectedSize)
        productArr.push(product)
    }

    localStorage.setItem('cart', JSON.stringify(productArr))
    UpdateCartNumber(productArr.length)
}

function UpdateCartNumber(num) {
    var cartCount = document.getElementById('cartIcon')
    cartCount.innerHTML = 'Cart<i class="material-icons">shopping_basket</i>' + '<sub>' + num + '</sub>' 
}