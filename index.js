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
  if (cart.length < 1) {
    return "Your shopping cart is empty."
  } else {
    var str = "In your cart, you have "
    while (cart.length > 0) {
      if (cart.length > 1) {

      }
    }
  }
}
/*
var cartCopy = cart.slice();
if (cartCopy.length > 0) {
    var cartList = "In your cart, you have "
  cartList += `${cart[0].itemName} at $${cart[0].itemPrice}`
  cartCopy.shift()
  while (cartCopy.length > 0) {
    if (cartCopy.length > 1) {
      cartList += `, ${cart[0].itemName} at $${cart[0].itemPrice}`
      cartCopy.shift()
    } else {
        cartList += `, and ${cart[0].itemName} at $${cart[0].itemPrice}`
        cartCopy.shift()
    }

  }
  cartList += "."
  return cartList
} else {
  return "Your shopping cart is empty."
}
}
*/
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
