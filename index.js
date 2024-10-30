const menu = [
  { name: "margharita", price: 8 },
  { name: "pepperium", price: 12 },
  { name: "quora", price: 10 },
  { name: "mangito", price: 9 },
];

let cashInRegister = 100;
const orderQueue = [];

function addNewPizza(pizzaObject) {
  //   const pizzaObject = { name: "pizza Name", price: 8 };
  menu.push(pizzaObject);
}

function placeOrder(pizzaName) {
  const selectedPizza = menu.find((item) => item.name === pizzaName);
  cashInRegister += selectedPizza.price;
  const newOrder = { pizza: selectedPizza, status: "Ordered" };
  orderQueue.push(newOrder);
  return newOrder;
}
