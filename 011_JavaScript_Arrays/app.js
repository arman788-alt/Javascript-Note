// JavaScript Arrays

// const language2 = new Array('HTML', 'CSS', 'JavaScript', 'PHP', true, 50);

const language = ["HTML", "CSS", "JavaScript", "PHP", true, 50];


language[4] = "Tailwind CSS";
language[5] = "react.js";
language[6] = "vue.js";
language[7] = "laravel";
language[10] = "Bootstrap"; //Holes in Array (index: 8,9 er moddhe empty holes create hobe)

// First Item
// console.log(language[0]);

// Last Item
console.log(language[language.length - 1]);

// Delete or Remove Last Item
language.pop();

// ADD last item
language.push("Angular.js");

// Add first
language.unshift("Basic Computing");

// Delete first item
language.shift();

console.log(language);
// console.log(language.at(5));  at() দিয়ে নির্দিষ্ট index-এর value পাওয়া যায়।
// console.log(language.toString());   Array-কে একটা string-এ convert করে।
// console.log(language.join(' * '));  
// console.log(language.length);
// console.log(language[2]);



const person = [];
person["firstName"] = "Ali";
person["lastName"] = "Hossain";
person[2] = 35;
// console.log(person.length);
// console.log(person);
// console.log(person[2]);

// const num = [20];
const num = new Array(20);

// console.log(num);

const x = [1, 2, 3, 4];
const y = [1, 2, 3, 4];
const p = [2, 3, 4];
const z = x.concat(y, p);
// console.log(z);


// Nested Array
const a = [
  [1, 2, 3, [3, 5, 8]],
  [4, 5, 6],
  [2, 4, 6],
];


// console.log(a);
// console.log(a.flat());  flat() nested Array-এর level ভেঙে এক level নিচে নিয়ে আসে।

// splice() দিয়ে Array-এর মাঝখান থেকে delete/add/replace করা যায়।
// array.splice(start, deleteCount, item1, item2, ...)
language.splice(2, 0, "info", "info2");  
language.splice(2, 2); 
console.log(language);

console.log(language.slice(1,3));
console.log(language.slice(1));





// Nested Array
const deepArray = [1, [2, [3, [4]]]];

console.log(deepArray.flat(1)); // [1, 2, [3, [4]]] (১ স্তর ভাঙলো)
console.log(deepArray.flat(2)); // [1, 2, 3, [4]] (২ স্তর ভাঙলো)
console.log(deepArray.flat(3)); // [1, 2, 3, 4] (৩ স্তর ভেঙে সব বের করে আনলো)
console.log(deepArray.flat(Infinity));







// push    → শেষে যোগ
// pop     → শেষে বাদ

// unshift → শুরুতে যোগ
// shift   → শুরুতে বাদ

// slice   → কপি করে অংশ নেয়
// splice  → আসল Array কাটাছেঁড়া করে

// concat  → Array জোড়া লাগায়
// flat    → Nested Array ভাঙে



// Array index → 0 থেকে শুরু
// length      → মোট item/slot সংখ্যা
// Last index  → length - 1













