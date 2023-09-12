function square(number){
    return number * number
}

function functionWithoutReturn(){
    console.log("This function used for processing only, no return value")
}

console.log(square()) //NaN error as no argument passed


console.log(square(2)) // 4
console.log(square('d')) // invalid argument, NaN
functionWithoutReturn()

