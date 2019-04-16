var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var stuff = {itemName: item, itemPrice: (Math.floor(Math.random()*100)+1)}
  cart.push(stuff)
  return `${item} has been added to your cart.`
}

function viewCart() {
  var cartCopy = cart
  var cartList = "In your cart, you have "
  if (cartCopy.length > 0) {
    cartList += `${cart[0].itemName} at $${cart[0].itemPrice}`]
    cartCopy.shift()
    while (cartCopy.length > 0) {
      if (cartCopy.length > 1) {
        cartList += `, ${cart[0].itemName} at $${cart[0].itemPrice}`]
      } else {
          cartList += `, and ${cart[0].itemName} at $${cart[0].itemPrice}`]
      }
      cartList += "."
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
