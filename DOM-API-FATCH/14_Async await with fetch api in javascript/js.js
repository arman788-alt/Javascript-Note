// Call Back function -> promise -> async await

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Sucess.....", console.log("Resolve Log"));
//     }, 2000);
//   });
// }

// const data = getData();
// console.log(data);

// console.log("log1....");
// console.log("log2....");
// console.log("log3....");

// -------------------------------------------------------------------

// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Sucess.....", console.log("Resolve Log"));
//     }, 2000);
//   });
// }

// async function anotherFunction(){
//     const data = await getData();
//     console.log(data);

//     console.log('Log 1....');
//     console.log('Log 2....');
//     console.log('Log 3....');

// }

// anotherFunction();

// --------------------------------------------------------

async function getData() {
  let url = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await url.json();
  console.log(data);
}



async function anotherFunction() {
  const data = await getData();
  console.log(data);

  console.log("Log 1....");
  console.log("Log 2....");
  console.log("Log 3....");
}

anotherFunction();
