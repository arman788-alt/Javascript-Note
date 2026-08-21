/*
 * JavaScript this
 */

// 'use strict';
// “this” in Global Context
// console.log(this);

var firstName = 'Ali';

// “this” in Regular Functions
function myFunction() {
  return this;
}

// console.log(myFunction());

//“this” in Arrow Functions
const myFunc = () => {
  // console.log(this);
};
myFunc();

// “this” in Event Handlers
const myBtn = document.querySelector('button');
myBtn.addEventListener('click', function () {
  console.log(this);
});



// var diye variable e data assign korle window te data add kore, but let,const diye declare korle data add kore na.
var fName = 'Shovo';
// let fName = 'Shovo';

// “this” in Methods of an Object
const student = {
  fName: 'Ali',
  sInfo: function () {
    // console.log(`${student.fName} loves to read`);
    return `${this.fName} loves to read`;
  },
  // Example using arrow function 👇
  arrowFunction: () => {
    return `${this.fName} loves to read`;
  },
};

console.log(student.sInfo());
student.fName = 'Shovo';
console.log(student.sInfo());
console.log(student.arrowFunction());

/*
 * The object that is exceuting the current function.   
 ? Method e 👉this refer kore object ke.
 ? Function e 👉this refer kore (Window, Global) ke.
 ? object er bitor arrow function ekti function, method na.
 */

function newPhone() {
  let phone = 'Android';
  console.log(this.phone);
}
newPhone();

const game = {
  gName: 'NfS',
  gInfo: function () {
    console.log(`Love to play ${this.gName}`);
  },
};

const aGame = {
  gName: 'Car Game',
};
// The bind() method is used to create a new function with a specified value of “this” and initial arguments.
const bindGame = game.gInfo.bind(aGame);
console.log(game.gInfo());
console.log(bindGame());






// What is this?
// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an object method, this refers to the object.
// In an event, this refers to the element that received the event.
// in methods like call(), apply(), and bind(), this can refer to any object.


// সহজে মনে রাখার টেকনিক (Summary)
// কোথায় আছে?	            this এর মান কী?
// একদম বাইরে (Global)---->Window (ব্রাউজার)
// অবজেক্টের মেথডে---------->	ওই নির্দিষ্ট অবজেক্টটি
// সাধারণ ফাংশনে ------------>	Window (যদি strict mode না থাকে)
// অ্যারো ফাংশনে-------------->	তার বাইরের স্কোপে যা আছে (Parent)
// ইভেন্ট লিসেনারে------------->(DOM)	যে এলিমেন্টে ক্লিক করা হয়েছে






