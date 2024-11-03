type Pizza = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  pizza: Pizza;
  status: "Ordered" | "Completed";
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;
const orderQueue: Order[] = [];

const menu: Pizza[] = [
  { id: nextPizzaId++, name: "margharita", price: 8 },
  { id: nextPizzaId++, name: "pepperium", price: 12 },
  { id: nextPizzaId++, name: "quora", price: 10 },
  { id: nextPizzaId++, name: "mangito", price: 9 },
];

function addNewPizza(pizzaObject: Pizza): void {
  menu.push(pizzaObject);
}

function placeOrder(pizzaName: string): undefined | Order {
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

function completeOrder(orderId: number): undefined | Order {
  const order = orderQueue.find((order) => order.id === orderId);
  if (!order) {
    console.error(`${orderId} was not found`);
    return;
  }
  order.status = "Completed";
  return order;
}

export function getPizzaDetails(
  identifier: number | string
): Pizza | undefined {
  // if (typeof identifier === "number") {
  //   return menu.find((item) => item.id === identifier);
  // } else if (typeof identifier === "string") {
  //   return menu.find(
  //     (item) => item.name.toLowerCase() === identifier.toLowerCase()
  //   );
  // }
  if (typeof identifier === "string") {
    return menu.find(
      (item) => item.name.toLowerCase() === identifier.toLowerCase()
    );
  } else if (typeof identifier === "number") {
    return menu.find((item) => item.id === identifier);
  } else {
    throw new TypeError(
      "Parameter identifier must be either string or a number"
    );
  }
}

addNewPizza({ id: nextPizzaId++, name: "chikken", price: 12 });
addNewPizza({ id: nextPizzaId++, name: "BBQ", price: 10 });
addNewPizza({ id: nextPizzaId++, name: "Spicy", price: 11 });

placeOrder("chikken");
completeOrder(1);

console.log("menu", menu);
console.log("cash", cashInRegister);
console.log("Order Queue", orderQueue);
