// Topics
// Template literals (``), 
// destructuring, 
// the spread/rest operator
// concept of promises (resolve, reject) | .then(), .catch(), and .finally()
// Call Back Functions
// Closure


//1. Template literals (``), 

// const myname = "Zayed";

// const intro = `Hi, My name is ${myname}! Thanks!`;

// console.log(intro);

// const student = {
//     name: "Zayed",
//     roll: 99,
//     age: 16,
// }

// console.log(student);
// // console.log(student.name);

// const { name: st_name, roll } = student;

// console.log(st_name);
// console.log(roll);

// console.log(student);

// const fruits = ["Apple", "Banana"];

// console.log(fruits);

// const [fruit_a, fruit_b] = fruits;

// [fruit_a]

// console.log(fruit_a);
// console.log(fruit_b);

// Spread Operator

// const fruits = ["Apple", "Banana"];

// // console.log(fruits);

// // console.log("Apple", "Banana");
// // console.log(...fruits);

// const moreFruits = [
//     // "Apple",
//     // "Banana",
//     "Cherry",
//     ...fruits,
// ];

// console.log(moreFruits);


// const student = {
//     name: "Zayed",
//     roll: 99,
//     age: 16,
// }

// console.log(student);

// const student2 = {
//     ...student,
//     department: "CSE",
//     roll: 63,
// }

// console.log(student2);

// Rest Operator

// const fruits = ["Apple", "Banana", "Cherry", "Guava", "Orange", "Jackfruit"];
// // Rest of the fruits

// console.log(fruits);

// const [fruitA, fruitB, ...otherFruits] = fruits;

// console.log(fruitA);
// console.log(fruitB);
// console.log(otherFruits);


// const student = {
//     stName: "Zayed",
//     roll: 99,
//     age: 16,
// }

// const { stName, ...otherInfo } = student;

// console.log(stName);
// console.log(otherInfo);


// function fetchOrder(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id == 1)
//                 resolve("Shirt");
//             else
//                 reject("No Order Found!");
//         }, 1000);
//     })
// }

// const order1 = fetchOrder(2);
// order1.then((result) => console.log(result)).catch((err) => console.log(err));
// console.log(order1);

// const order2 = fetchOrder(2);
// console.log(order2);

// const orderFood = new Promise((resolve, reject) => {
//     const isShopOpen = false;

//     if (isShopOpen) {
//         resolve("Food Delivered! ðŸ”");
//     } else {
//         reject("Shop closed! Sorry!");
//     }
// });

// orderFood
//     .then((result) => console.log(result))
//     .catch((result) => console.log(result));


// Async Await


// Callback

// function xyz(a) {
//     a();
// }

// const sayJoke = () => console.log("Hahaha!");

// // setTimeout(sayJoke, 2000);

// xyz(sayJoke);

// setTimeout(() => {
//     console.error("Ghum ja!");
// }, 1000);

// new Promise((resolve, reject) => {

// })

// let count = 1;

// function a() {
//     count += 1;
//     console.log(count);
// }


// a();
// a();
// a();

// function makeCounter() {
//     let count = 1;

//     return function () {
//         count += 1;
//         console.log(count);
//     }
// }

// const counter = makeCounter();

// counter();
// counter();
// counter();
