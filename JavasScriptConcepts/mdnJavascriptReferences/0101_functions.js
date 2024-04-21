// youtube: https://www.youtube.com/watch?v=T1AgkjstFyI course

function arriveAtCoffeeShop(customerName) {
  console.log(
    `Welcome Mr. ${customerName}, what coffee would you like to have?`
  );
}


function orderCoffee(coffeeType) {
    switch (coffeeType) {
        case "Mocha":
            console.log("I would like to have a Mocha");
            break;
        case "Latte":
            console.log("I would like to have a Latte");
            break;
        case "Cappuccino":
            console.log("I would like to have a Cappuccino");
            break;
        default:
            console.log("I'm sorry, we don't have that type of coffee.");
    }
}

function payForCoffee(amountPaid) {
    console.log("you paid " +amountPaid)
  // if coffee type is mocha then pay 10
  let mochaPrice = 10;
  let change = amountPaid - mochaPrice;
  if (change < 0) {
    return "Not enough money";
  }
  return `Here is your change ${change}`;
}

arriveAtCoffeeShop("John");
orderCoffee("Mocha")
console.log(payForCoffee(Math.random(2000)*1000));

console.log(arriveAtCoffeeShop()) // undefined when there is no return statement in the function