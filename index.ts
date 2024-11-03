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

const menu: Pizza[] = [
  { id: 1, name: "margharita", price: 8 },
  { id: 2, name: "pepperium", price: 12 },
  { id: 3, name: "quora", price: 10 },
  { id: 4, name: "mangito", price: 9 },
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

export function getPizzaDetails(identifier: number | string) {
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

// addNewPizza({ id: 4, name: "chikken", price: 12 });
// addNewPizza({ id: 5, name: "BBQ", price: 10 });
// addNewPizza({ id: 6, name: "Spicy", price: 11 });

// placeOrder("chikken");
// completeOrder(1);

// console.log("menu", menu);
// console.log("cash", cashInRegister);
// console.log("Order Queue", orderQueue);
