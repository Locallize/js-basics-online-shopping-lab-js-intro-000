var cart = [];

function getCart() {
  
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let cartItems = {};
      cartItems.itemName = item;
      cartItems.itemPrice = Math.floor(Math.random() * 100 )+ 1;
      cart.push(cartItems);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
  for(var i = 0; cart.length ; i++){
    
  }
}

function removeFromCart(item) {
  // write your code here
  delete cartItems[item];
}

function placeOrder(cardNumber) {
  // write your code here
}
