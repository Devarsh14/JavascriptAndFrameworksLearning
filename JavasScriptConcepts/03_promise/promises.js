// const promise1 = new Promise((resolve, reject) => {
//   // do an async task
//   // db calls, cryptography, http requests
//   setTimeout(function () {
//     console.log("Async task is completed");
//     resolve(); // when code hits resolve, then .then() is executed means .then() is associated or linked with resolve
//   }, 2000);
// });

// // .then() is associated with resolve in promise
// // promise1.then(() => console.log('promise1 is consumed'));

// promise1.then(function () {
//   console.log("promise1 is consumed");
// });

// // promise2 is a promise object & resolve returns a user object
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve({ username: "john", email: "john@example.com" });
//   }, 2000);
// });

// promise2.then(function (user) {
//   console.log(user);
// });

// const promise3 = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve({ username: "john", email: "john@example.com" });
//   } else {
//     reject("Error: Something went wrong");
//   }
// });

// promise3
//   .then(function (user) {
//     console.log(user.username);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log("ERROR: Triggered catch block");
//     console.log(error);
//   })
//   .finally(function () {
//     console.log("The promise is either resolved or rejected.");
//   });

// const promise5 = new Promise((resolve, reject) => {
//   let error = true;
//   if (!error) {
//     resolve({ username: "john", email: "john@example.com" });
//   } else {
//     reject("Error: Something went wrong");
//   }
// });

// async function consumePromise5() {
//   console.log("consumePromise5 is called");
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromise5();

//  the promise either in .then() or async/await needs to be waited
// async function getAllUsers() {

//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);

//     } catch (error) {
//         console.log(error);
//     }

// }
// getAllUsers();


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {return response.json()})
.then((data) => {console.log(data)})
.catch((error) => console.log(error)); // fetch is a promise