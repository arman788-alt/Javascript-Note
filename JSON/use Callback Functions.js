// how to use Callback Functions in JavaScript
// Jotokhon nah porjonto first function execute na hoi, totokhon porjonto 2nd function execute hoite dibo na, 1st function execute sesh hoilei porer function e jabo
// setTimeout(function, delay, param1, param2, ...);


// problem ta
// console.log("first");

// setTimeout(function(){
//     console.log("second");
// }, 2000)

// console.log("Third");


// --------------------------------------------------------------

// problem er solution callback function er maddhome
const first = (a, b, Callback) =>{
    setTimeout(() => {
        console.log(a + b);
        Callback();
    }, 3000)
}


const second = () =>{
    console.log("second");
}


first(6,6, second);













// ->কলব্যাক ফাংশন হলো এমন একটি ফাংশন যা অন্য একটি ফাংশনের ভেতর 'আর্গুমেন্ট' বা প্যারামিটার হিসেবে পাঠানো হয়।


// ->জাভাস্ক্রিপ্টে কলব্যাক কেন লাগে?
// জাভাস্ক্রিপ্ট সাধারণত ওপর থেকে নিচে একটার পর একটা লাইন চালায় (Synchronous)। কিন্তু কিছু কাজ আছে যা শেষ হতে সময় লাগে (যেমন: সার্ভার থেকে ডাটা আনা বা কোনো ফাইল লোড করা)। এই সময় জাভাস্ক্রিপ্ট বসে না থেকে পরের লাইনে চলে যায়। তখন আমরা কলব্যাক ব্যবহার করে বলি— "এই কাজটা শেষ হলে এই ফাংশনটি চালাও।"


