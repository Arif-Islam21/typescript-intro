"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPizzaDetails = getPizzaDetails;
var cashInRegister = 100;
var nextOrderId = 1;
var nextPizzaId = 1;
var orderQueue = [];
var menu = [
    { id: nextPizzaId++, name: "margharita", price: 8 },
    { id: nextPizzaId++, name: "pepperium", price: 12 },
    { id: nextPizzaId++, name: "quora", price: 10 },
    { id: nextPizzaId++, name: "mangito", price: 9 },
];
function addNewPizza(pizzaObject) {
    pizzaObject.id = nextPizzaId++;
    menu.push(pizzaObject);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (item) { return item.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " is not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = {
        id: nextOrderId++,
        pizza: selectedPizza,
        status: "Ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " was not found"));
        return;
    }
    order.status = "Completed";
    return order;
}
function getPizzaDetails(identifier) {
    // if (typeof identifier === "number") {
    //   return menu.find((item) => item.id === identifier);
    // } else if (typeof identifier === "string") {
    //   return menu.find(
    //     (item) => item.name.toLowerCase() === identifier.toLowerCase()
    //   );
    // }
    if (typeof identifier === "string") {
        return menu.find(function (item) { return item.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (item) { return item.id === identifier; });
    }
    else {
        throw new TypeError("Parameter identifier must be either string or a number");
    }
}
addNewPizza({ name: "chikken", price: 12 });
addNewPizza({ name: "BBQ", price: 10 });
addNewPizza({ name: "Spicy", price: 11 });
placeOrder("chikken");
completeOrder(1);
console.log("menu", menu);
// console.log("cash", cashInRegister);
// console.log("Order Queue", orderQueue);
