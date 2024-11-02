type Pizza = {
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "Ordered" | "Completed";
};

const menu = [
  { name: "margharita", price: 8 },
  { name: "pepperium", price: 12 },
  { name: "quora", price: 10 },
  { name: "mangito", price: 9 },
];

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObject: Pizza) {
  menu.push(pizzaObject);
}

function placeOrder(pizzaName: string) {
  const selectedPizza = menu.find((item) => item.name === pizzaName);
  if (!selectedPizza) {
    console.error(`${pizzaName} is not exist in the menu`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderId++,
    pizza: selectedPizza,
    status: "Ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderId: number) {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found`);
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
