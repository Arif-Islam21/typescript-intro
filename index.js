// const menu = [
//   { name: "margharita", price: 8 },
//   { name: "pepperium", price: 12 },
//   { name: "quora", price: 10 },
//   { name: "mangito", price: 9 },
// ];

// const cashInRegister = 100;
// const nextOrderId = 1;
// const orderQueue = [];

// function addNewPizza(pizzaObject) {
//   menu.push(pizzaObject);
// }

// function placeOrder(pizzaName) {
//   const selectedPizza = menu.find((item) => item.name === pizzaName);
//   cashInRegister += selectedPizza.price;
//   const newOrder = {
//     id: nextOrderId++,
//     pizza: selectedPizza,
//     status: "Ordered",
//   };
//   orderQueue.push(newOrder);
//   return newOrder;
// }

// function completeOrder(orderId) {
//   const order = orderQueue.find((order) => order.id === orderId);
//   order.status = "Completed";
//   return order;
// }

// addNewPizza({ name: "chikken", price: 12 });
// addNewPizza({ name: "BBQ", price: 10 });
// addNewPizza({ name: "Spicy", price: 11 });

// placeOrder("chikken");
// completeOrder("1");

// console.log("menu", menu);
// console.log("cash", cashInRegister);
// console.log("Order Queue", orderQueue);

// introduceing types
// let myName = "Bob";
// myName = 8;
