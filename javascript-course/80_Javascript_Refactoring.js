// Original code
function calculateTotalPrice(quantity, price, taxRate) {
  var total = quantity * price;
  var taxAmount = total * (taxRate / 100);
  var totalPrice = total + taxAmount;
  return totalPrice;
}

var quantity = 5;
var price = 10;
var taxRate = 20;

var totalPrice = calculateTotalPrice(quantity, price, taxRate);
console.log("Total price:", totalPrice);

// Refactored code
function calculateTotalPrice(quantity, price, taxRate) {
  var total = quantity * price;
  var taxAmount = calculateTaxAmount(total, taxRate);
  var totalPrice = total + taxAmount;
  return totalPrice;
}

function calculateTaxAmount(amount, taxRate) {
  return amount * (taxRate / 100);
}

var quantity = 5;
var price = 10;
var taxRate = 20;

var totalPrice = calculateTotalPrice(quantity, price, taxRate);
console.log("Total price:", totalPrice);

// Debugging
function calculateTotalPrice(quantity, price, taxRate) {
  var total = quantity * price;
  console.log("Total:", total);
  var taxAmount = calculateTaxAmount(total, taxRate);
  console.log("Tax amount:", taxAmount);
  var totalPrice = total + taxAmount;
  console.log("Total price:", totalPrice);
  return totalPrice;
}

function calculateTaxAmount(amount, taxRate) {
  return amount * (taxRate / 100);
}

var quantity = 5;
var price = 10;
var taxRate = 20;

var totalPrice = calculateTotalPrice(quantity, price, taxRate);
console.log("Final total price:", totalPrice);
