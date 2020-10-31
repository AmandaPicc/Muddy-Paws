productArr = []

//Product class for the product purchased
class Product {
	constructor(type, color, size) {
        this.type = type
        this.color = color
        this.size = size
    }
}    

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

    UpdateCartNumber(productArr.length)
}

function UpdateCartNumber(num) {
    alert("You have " + num + " item(s) in the cart.")
}

function cartPage() {
    //localStorage.setItem('order', JSON.stringify(productArr))
    //var localProductArr = localStorage.getItem('order')
    //var productArr2 = JSON.parse(localProductArr)

    alert("Products num: " + productArr.length)
    
}