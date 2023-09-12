// primtive data types
// 7 types, string number, boolean, null, undefined, symbol, BigIn


// Reference type: non premitive 
// Arrany objects functions

const score = 100;
let named = "Dev"
console.log(named);

const personId = Symbol("id");
console.log(personId);

// arrays in javascript
const heros = ["superman","batman","spidy"]

let personObject ={
    name: "dev",
    age:39
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof score)
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof personObject)

// Two types of memory: stack and heap
// stack: primitive data types
// heap: reference data types

let myYoutubeName = "IDontHaveAny"

let anotherName = myYoutubeName
anotherName ="SecondYouTubeName"
console.log(anotherName)
console.log(myYoutubeName)

userOne = {
email:"111@ymail.com",
name:"UK Warrioors"
}

userTwo = userOne
userTwo.email = "222@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)