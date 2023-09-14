function square(number){
    return number * number
}

function functionWithoutReturn(){
    console.log("This function used for processing only, no return value")
}

// console.log(square()) //NaN error as no argument passed


// console.log(square(2)) // 4
// console.log(square('d')) // invalid argument, NaN
// functionWithoutReturn()


const username = 'John';

function logger(){

    console.log("Hello")
    console.log("Hello")
    console.log("Hello")
    console.log("Hello")
    console.log("Hello")
}
function upperCaseName(){
    return username.toUpperCase();
}

// logger()
// console.log(upperCaseName())

// there are 4 ways to declare a function in JS
// console.log(convertToLiters(2)) // this is because of hoisting this works bad practice function should be declared before calling
// 1. Function Declaration
function convertToLiters(gallons){
    return gallons * 3.78541;
}

// console.log(convertToLiters(2))

// 2. Function Expression
// console.log(convertToListersExpression(2)) // this is because of hoisting
const convertToListersExpression = function(gallons){
    return gallons * 3.78541;
}


let result = convertToListersExpression(2)
// console.log(result)

// 3. Arrow Function
// arrow functions are not hoisted
// can not be used as con
const convertToListersArrow = gallons => gallons * 3.78541;


