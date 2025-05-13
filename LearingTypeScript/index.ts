const menu = [
    {name: "Margherita", price: 8},
    {name: "Pepperoni", price: 11},
    {name: "Hawaiian", price: 10},
    {name: "Veggie", price: 9},
]

let cashInRegister = 100
let nextOrderId = 1;
const orderQueue = []

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

/**
 * write another utility fuction , placeOrder, that takes a pizza name parameter and:
 * 1. finds the poizza object in the manu 
 * 2. adds the income to the cashIn Register
 * 3. pushes a new "order object" to the orederQueue
 *      e.g (pizza: selectedPizzaObjectFromSte1, status: "Ordered!")
 * 4. return the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaobj => pizzaobj.name == pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = { id:nextOrderId++, pizza: selectedPizza, status: "ordered"}
    orderQueue.push(newOrder)
    return newOrder;
}

function compleateOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId)
    order.status = "compleated"
    return order
}

addNewPizza({name: "Chicen Bacon Ranch", cost: 12})
addNewPizza({name: "BBQ chicken", cost: 12})
addNewPizza({name: "Spicy Sausage", cost:11})

placeOrder("Chicen Bacon Ranch")
compleateOrder("1");

console.log("Menu: ", menu);
console.log("Cash in register: ", cashInRegister);
console.log("Order queue: ", orderQueue);



