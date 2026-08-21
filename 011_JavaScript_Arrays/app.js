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
// console.log(language.at(5));
// console.log(language.toString());
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

const a = [
  [1, 2, 3, [3, 5, 8]],
  [4, 5, 6],
  [2, 4, 6],
];
// console.log(a);
// console.log(a.flat());
language.splice(2, 0, "info", "info2");
language.splice(2, 2);
console.log(language);

console.log(language.slice(1,3));
console.log(language.slice(1));







const deepArray = [1, [2, [3, [4]]]];

console.log(deepArray.flat(1)); // [1, 2, [3, [4]]] (১ স্তর ভাঙলো)
console.log(deepArray.flat(2)); // [1, 2, 3, [4]] (২ স্তর ভাঙলো)
console.log(deepArray.flat(3)); // [1, 2, 3, 4] (৩ স্তর ভেঙে সব বের করে আনলো)























// Gemini Note
/**
 * ১. অ্যারে ডিক্লেয়ারেশন ও বেসিক আপডেট
 */
// const language = ["HTML", "CSS", "JavaScript", "PHP", "Python", "SQL"];

// ইনডেক্স ব্যবহার করে মান পরিবর্তন
// language[4] = "Tailwind CSS";
// language[5] = "React.js";

//  সতর্কবার্তা: ইনডেক্স গ্যাপ তৈরি করা (Holes)
// language[10] = "Bootstrap"; 
// এটি করলে ইনডেক্স ৮ এবং ৯ 'empty' হয়ে থাকবে, যা ভালো প্র্যাকটিস নয়।



// /**
//  * ২. আইটেম যোগ এবং বিয়োগ করা (Common Methods)
//  */
// language.push("Angular.js");      // শেষে যোগ করা
// language.pop();                   // শেষ থেকে একটি বাদ দেওয়া

// language.unshift("Basic PC");     // শুরুতে যোগ করা
// language.shift();                 // শুরু থেকে একটি বাদ দেওয়া

// /**
//  * ৩. নির্দিষ্ট পজিশনে কাজ করা (Splice)
//  */
// // syntax: splice(শুরুর ইনডেক্স, কয়টি ডিলিট হবে, নতুন কী যোগ হবে)
// language.splice(2, 0, "Info1", "Info2"); // ২ নম্বর ইনডেক্সে ২টি আইটেম যোগ
// language.splice(2, 2);                   // ২ নম্বর ইনডেক্স থেকে ২টি আইটেম ডিলিট



// /**
//  * ৪. অ্যারে মার্জ বা জোড়া লাগানো (Concat)
//  */
// const x = [1, 2], y = [3, 4], p = [5, 6];
// const combined = x.concat(y, p); // [1, 2, 3, 4, 5, 6]

// /**
//  * ৫. মাল্টি-ডাইমেনশনাল অ্যারে (Nested Array)
//  */
// const complexArray = [
//   [1, 2, 3, [3, 5, 8]], // ৩ স্তরের অ্যারে
//   [4, 5, 6]
// ];
// // flat() ব্যবহার করে সবগুলোকে এক লেভেলে আনা
// const simpleArray = complexArray.flat(2); 

/**
 * ৬. গুরুত্বপূর্ণ টিপস ও কনফিউশন
 */

// ক) অ্যাসোসিয়েটিভ অ্যারে (ভুল পদ্ধতি):
// const person = [];
// person["firstName"] = "Ali"; // এটি আসলে অবজেক্টের মতো কাজ করে, অ্যারের মতো নয়।
// // সমাধান: অবজেক্ট ব্যবহার করো {firstName: "Ali"}

// // খ) Array Constructor সতর্কতা:
// const numTrap = new Array(20); // ২০টি খালি ঘরের একটি অ্যারে তৈরি হবে।
// const numSolid = [20];         // ১টি আইটেম (২০) ওয়ালা অ্যারে।

//  in JavaScript]

// /**
//  * ৭. এক্সেস করার আধুনিক উপায়
//  */
// console.log(language[0]);                  // প্রথম আইটেম
// console.log(language[language.length - 1]); // শেষ আইটেম
// console.log(language.at(-1));              // শেষ আইটেম (আধুনিক নিয়ম)







