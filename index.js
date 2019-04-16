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
    if (cart.length > 1) {
      var i = 0
    do {
      str += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      i++;
    } while (cart.length > 1)
    str += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    cart = cartSave.slice()
    return str
  } else {
    str += `${cart[0].itemName} at $${cart[0].itemPrice}.`
    return str
  }
      }
    }

function total() {
  if (cart.length < 1) {
    return 0
  } else {
    var total = 0
    var i = 0
    while (i < cart.length) {
      total += cart[i]
      i++
    }
    return total
  }
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
