// JavaScript Loop

let car = ['BMW', 'Volvo', 'Toyota', 'Ford', 'Tesla', 'Lamburgini'];
car.push('Saab');

// console.log(car[0]);
// console.log(car[1]);

// for (let i = 0; i < car.length; i++) {
//   console.log(car[i]);
// }



// While loop
let num = 0;
while (num < 10) {
  console.log(num);
  num++;
}


// For of:
// • Usage: অ্যারের (Array) ভ্যালু সরাসরি পেতে।
// for (let i of car) {
//   console.log(i); // সরাসরি নামগুলো প্রিন্ট হবে
// }




// For In Loop
// • Usage: অবজেক্টের (Object) প্রোপার্টি বা কী (Key) বের করতে।
let person = {
  name: 'Ali',
  age: 30,
  country: 'Bangladesh',
  job: 'Web Developer',
};

// for (let key in person) {
//   let capLetter = i.charAt(0).toUpperCase() + i.slice(1);
//   console.log(capLetter + ': ' + person[i]);
// }


// for(let key in person){
//   console.log(key +': '+ person[key]);
// }




// forEach Method
// • Usage: অ্যারের প্রতিটি এলিমেন্টের ওপর কোনো কাজ করতে।
car.forEach(function (i) {
  console.log(i);
});







// For Loop	যখন সংখ্যা বা ইনডেক্স নির্দিষ্ট থাকে।
// While Loop	যখন শর্তের ওপর ভিত্তি করে লুপ চালাতে হয়।
// For...of	অ্যারের (Array) ভ্যালু সহজে পড়ার জন্য।
// For...in	অবজেক্টের (Object) তথ্য বের করার জন্য।
// forEach	অ্যারের ওপর ফাংশনাল কাজ করার জন্য।