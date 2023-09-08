const accountId = 1111;
let accountEmail = "random@google.com"

// below two types of variable declaration are not to be used in modern javascript
var accountPassword = "12345678"
accountCity = "New York"

//accountId= 2; // not allowed
accountEmail = "dv@hmail.com"
accountPassword = "256988"
accountCity = "London"

/*
 Prefer not to use var 
 becase due to issue of block scope and function scope
*/
let accountState; // when variable is declared but value is not assigened then it is undefined in javascript
console.log(accountId)
console.log(accountId, accountEmail, accountPassword, accountCity)
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])


console.log(accountState) // undefined