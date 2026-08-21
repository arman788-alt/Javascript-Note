// JavaScript Math

// If need a round figure
console.log(Math.round(Math.PI));
console.log(Math.round(3.9));

console.log(Math.ceil(8.00001)); // 9
console.log(Math.floor(8.00001)); // 8

// If you want power like 2^2 = 4
console.log(Math.pow(2, 2)); // 4
console.log(Math.pow(4, 2)); // 16

// If need square root value
console.log(Math.sqrt(64)); // 8

// If need to ignore negative value or Absolute value
console.log(Math.abs(-5));

// Max or Min value
console.log(Math.max(0, 5, 8, 9, 55, 87));
console.log(Math.min(0, 5, 8, 9, 55, 87));

//Array Max or Min Value
console.log(Math.max.apply(null, [10,20,30,40,50]))
console.log(Math.min.apply(null, [10,20,30,40,50]))

// মডার্ন জাভাস্ক্রিপ্টে অ্যারো থেকে Max/Min বের করার জন্য apply এর বদলে Spread Operator ব্যবহার করা সহজ:
const nums = [10, 20, 30];
console.log(Math.max(...nums)); // আউটপুট: 30


// If you want to show PI value
console.log(Math.PI);

// Algebra sin, cos value
console.log(Math.sin((90 * Math.PI) / 180));

// If need to show a random value
console.log(Math.random());
console.log(Math.random().toFixed(2)); // 0.12
console.log(Math.random().toFixed(2) * 10); // 0 - 9
console.log(Math.random().toFixed(2) * 10 + 1); // 0 - 10
console.log(Math.ceil(Math.random()));

// Let's make a ludo game

let upperValue = 6;
let lowerValue = 1;
let resultValue = Math.ceil(Math.random() * (upperValue - lowerValue) + lowerValue);
console.log(resultValue);



// project
function rollDice() {
  // Generate a random number between 1 and 6
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  // Update the image source based on the random number
  let imageSource = "img/" + randomNumber + ".png";
  document.getElementById("ludo").src = imageSource;
}