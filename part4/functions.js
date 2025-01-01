// function makeTea(typeOfTea) {
//   return `making ${typeOfTea}`;
// }
// let teaOrder = makeTea("lemon tea");
// console.log(teaOrder);

// function orderTea(teaType) {
//   function confirmOrder() {
//     return `Order confirmed for chai ${teaType}`;
//   }
//   return confirmOrder();
// }

// let orderConfirmation = orderTea("Masala Chai");
// console.log(orderConfirmation);

// const calculateTotal = (price, quantity) => price * quantity;
// let totalCost = calculateTotal(499 * 100);

// function makeTea(typeOfTea) {
//   return ` makeTea: ${typeOfTea}`;
// }
// function processTeaOrder(tea) {
//   return tea("earl grey");
// }
// let order = processTeaOrder(makeTea);
// console.log(order);

// problem 5

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
let result = teaMaker("green tea");

console.log(result);
