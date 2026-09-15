const body = document.getElementById('body');
const button = document.querySelectorAll('li');


// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function () {
//   body.style.backgroundColor = '#ff7675';
// });

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function () {
//   body.style.backgroundColor = '#55efc4';
// });

// button.forEach(function (value) {
//   value.addEventListener('click', function () {
//     let className = this.classList.value;
//     body.style.backgroundColor = className;
//     console.log(className);
//   });
// });


button.forEach(function (value) {
  value.addEventListener('click', function () {
    let className = this.classList[0];

    let color = '';
    if (className === 'red') {
      color = '#ff7675';
    }
    if (className === 'green') {
      color = '#55efc4';
    }
    if (className === 'blue') {
      color = '#74b9ff';
    }
    if (className === 'pink') {
      color = '#fd79a8';
    }
    if (className === 'purple') {
      color = '#a29bfe';
    }
    body.style.backgroundColor = color;
    // console.log(className);
    // console.log(color);
  });
});
















// একটি উদাহরণ দিয়ে দেখুন:
// ধরুন আপনার HTML এরকম:
// <li class="blue button-style">Blue</li>

// যখন আপনি এই বাটনে ক্লিক করবেন:
// ১. this = এই নির্দিষ্ট <li> এলিমেন্ট।
// ২. this.classList = ["blue", "button-style"] (একটি তালিকা)।
// ৩. this.classList[0] = ওই তালিকার প্রথমটি, অর্থাৎ "blue"।

// সবশেষে, let className = "blue"; — এই মানটিই className ভেরিয়েবলে জমা হচ্ছে।