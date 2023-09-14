// youtube: https://www.youtube.com/watch?v=T1AgkjstFyI course

function arriveAtCoffeeShop(customerName) {
  console.log(
    `Welcome Mr. ${customerName}, what coffee would you like to have?`
  );
}


function orderCoffee() {
  console.log("I would like to have a Mocha");
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
orderCoffee()
console.log(payForCoffee(Math.random(2000)*1000));