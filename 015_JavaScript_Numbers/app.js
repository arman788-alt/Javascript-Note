// JavaScript Numbers
const x = 5555555555555555;
const y = 0.6;
const z = 0.7;
const l = (y + z).toFixed(2); // String Value
// console.log(new Number(l));

const a = 10;
const b = 20;
const c = 248;
const d = 'javascript';
const e = c - d;

// console.log(b + a + l + c);
// console.log(c - l);
// console.log(c * l);
// console.log(c / l);

// console.log(e);

/*
let num = 2;
let value = '';
while (num != Infinity) {
  num = num * num;
  value = value + num + '<br>';
}
document.getElementById('title').innerHTML = value;
*/

// console.log(c.toString(16));

const g = 300;
const h = new Number(300);
const r = 324329.374786587;

// console.log(g == h);
// console.log(g === h);

// console.log(r.toPrecision(3));
// console.log(r.toFixed(2));

let newNum = Number.EPSILON;
newNum = Number.MAX_VALUE;
newNum = Number.MIN_VALUE;
newNum = Number.POSITIVE_INFINITY;
newNum = Number.NEGATIVE_INFINITY;
newNum = Number.NaN;
console.log(newNum);





















// Gemini Note
// ১. প্রিসিশন বা নির্ভুলতার সীমাবদ্ধতা (Integer Precision)
// জাভাস্ক্রিপ্টে ১৫ ডিজিটের বেশি হলে সংখ্যাগুলো সঠিক মান হারায়।
// const x = 5555555555555555; 

// // ২. দশমিকের হিসাব (Floating Point Issue)
// const y = 0.6;
// const z = 0.7;
// // ০.৬ + ০.৭ সরাসরি ১.৩ না হয়ে বাইনারি সমস্যার কারণে ১.২৯৯৯... আসতে পারে।
// // toFixed(2) ব্যবহার করে আমরা দশমিকের পর ২ ঘর পর্যন্ত ফিক্স করি।
// // ⚠️ মনে রেখো: toFixed() সবসময় রেজাল্টকে String বানিয়ে ফেলে।
// const l = (y + z).toFixed(2); 



// // ৩. গাণিতিক অপারেশন ও টাইপ কনভার্সন
// const a = 10;
// const b = 20;
// const c = 248;
// const d = 'javascript'; // এটি একটি স্ট্রিং

// // NaN (Not a Number): যখন একটি সংখ্যার সাথে স্ট্রিং বিয়োগ বা গুণ করা হয়।
// const e = c - d; // আউটপুট: NaN

// // ৪. স্ট্রিং ও নাম্বারের যোগ (Concatenation)
// // লজিক: নাম্বার + নাম্বার + স্ট্রিং + নাম্বার
// // প্রথমে ১০+২০=৩০ হবে, তারপর স্ট্রিং '১.৩০' এর সাথে জোড়া লেগে '৩০১.৩০' হবে।
// // console.log(b + a + l + c); 

// // ৫. অসীম সংখ্যা (Infinity)
// /*
// let num = 2;
// while (num != Infinity) {
//   num = num * num; // সংখ্যাটি বারবার গুণ হয়ে একসময় কম্পিউটারের ধারণক্ষমতার বাইরে চলে যাবে।
// }
// */

// // ৬. বেস কনভার্সন (Base conversion)
// // toString(16) ব্যবহার করে সংখ্যাকে হেক্সাডেসিমালে রূপান্তর করা হয়।
// // console.log(c.toString(16)); // f8

// // ৭. প্রিমিটিভ বনাম অবজেক্ট (Primitive vs Object)
// const g = 300;               // সাধারণ নাম্বার (Literal)
// const h = new Number(300);   // নাম্বার অবজেক্ট (ধীর গতির এবং মেমোরি বেশি নেয়)

// // g == h  -> true  (শুধু মান চেক করে)
// // g === h -> false (মান এবং টাইপ দুইটাই চেক করে, এখানে একটি Number অন্যটি Object)



// // ৮. ফরমেটিং মেথড (Formatting)
// const r = 324329.374786587;
// // toPrecision(3) -> মোট ৩টি ডিজিট দেখাবে (৩.২৪e+৫)
// // toFixed(2)     -> দশমিকের পর শুধু ২ ঘর দেখাবে (৩২৪৩২৯.৩৭)

// // ৯. নাম্বারের বিশেষ মান (Static Properties)
// let newNum;
// newNum = Number.EPSILON;           // ক্ষুদ্রতম পার্থক্য (দশমিকের সূক্ষ্ম হিসেবে লাগে)
// newNum = Number.MAX_VALUE;         // জাভাস্ক্রিপ্টের সবথেকে বড় সম্ভব সংখ্যা
// newNum = Number.MIN_VALUE;         // জাভাস্ক্রিপ্টের সবথেকে ছোট সম্ভব সংখ্যা
// newNum = Number.POSITIVE_INFINITY; // অসীম ধনাত্মক
// newNum = Number.NEGATIVE_INFINITY; // অসীম ঋণাত্মক
// newNum = Number.NaN;               // "সংখ্যার যোগ্য নয়" এমন মান