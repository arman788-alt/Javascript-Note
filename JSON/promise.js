// Promise-এর তিনটি অবস্থা (States)
// জাভাস্ক্রিপ্টেও একটি Promise সব সময় এই ৩টি অবস্থার মধ্য দিয়ে যায়:

// 1.Pending: প্রাথমিক অবস্থা, কাজ শুরু হয়েছে কিন্তু এখনো শেষ হয়নি।
// 2.Resolved / Fulfilled: কাজ সফলভাবে শেষ হয়েছে।
// 3.Rejected: কাজ ব্যর্থ হয়েছে (যেমন: ইন্টারনেট নেই বা সার্ভারে সমস্যা)।

// const willMarry = true;

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (willMarry) {
//       resolve("Success");
//     } else {
//       reject("Sorry...");
//     }
//   }, 2000);

// }).then((value) =>{
//     console.log(value);
// }).catch((error) => {
//   console.log(error);
// })

// ---------------------------------------------------------

const willMarry = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (willMarry) {
      resolve("Success");
    } else {
      reject("failed...");
    }
  });
});

myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Sob prokriya sesh");
  });
