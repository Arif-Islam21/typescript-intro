var menu = [
    { name: "margharita", price: 8 },
    { name: "pepperium", price: 12 },
    { name: "quora", price: 10 },
    { name: "mangito", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObject) {
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
addNewPizza({ name: "chikken", price: 12 });
addNewPizza({ name: "BBQ", price: 10 });
addNewPizza({ name: "Spicy", price: 11 });
placeOrder("chikken");
completeOrder(1);
console.log("menu", menu);
console.log("cash", cashInRegister);
console.log("Order Queue", orderQueue);
