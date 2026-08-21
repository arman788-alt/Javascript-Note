// JSON এর পূর্ণরূপ হলো JavaScript Object Notation। এটি ডেটা ফরম্যাট করার একটি পদ্ধতি। যখন আমরা সার্ভার থেকে কোনো ডেটা নিয়ে আসি বা সার্ভারে ডেটা পাঠাই, তখন সেটি সাধারণত JSON ফরম্যাটে থাকে। এটি দেখতে অনেকটা জাভাস্ক্রিপ্ট অবজেক্টের মতোই, কিন্তু এটি আসলে একটি টেক্সট (String)।



// 1) JSON.parse()
// সার্ভার থেকে যখন ডেটা আসে, সেটি Text (String) আকারে থাকে। সেই টেক্সটকে জাভাস্ক্রিপ্ট Object-এ রূপান্তর করতে এটি ব্যবহার করা হয়।

const jsonString1 = '{"name": "Arif", "age": 25}';
const userObj = JSON.parse(jsonString1);

console.log(userObj.name); // আউটপুট: Arif




// 2) JSON.stringify()
// আপনার কাছে একটি জাভাস্ক্রিপ্ট অবজেক্ট আছে, কিন্তু আপনি সেটি সার্ভারে পাঠাতে চান। তখন অবজেক্টটিকে Text (String)-এ রূপান্তর করতে এটি ব্যবহার করা হয়।

const user = { name: "Arif", age: 25 };
const jsonString2 = JSON.stringify(user);

console.log(jsonString2); // আউটপুট: '{"name":"Arif","age":25}'



// JSON-এর কিছু নিয়ম (Rules)
// কী (Keys): সবসময় ডাবল কোটেশন ("") দিতে হবে।
// ভ্যালু (Values): স্ট্রিং হলে ডাবল কোটেশন হবে। এছাড়া Number, Boolean, Array, Object অথবা null হতে পারে।
// ফাংশন: JSON-এর ভেতর ফাংশন রাখা যায় না।
// শেষ কমা: অবজেক্টের শেষ আইটেমের পর কমা দেওয়া যাবে না।