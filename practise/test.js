let bodyTag = document.getElementById("bodyTag");
let list = document.querySelectorAll("li");

// let redColor = document.querySelector('.red')

// redColor.addEventListener('click', function(){
//     bodyTag.style.backgroundColor = 'red';
// });

// let greenColor = document.querySelector('.green')

// greenColor.addEventListener('click', function(){
//     bodyTag.style.backgroundColor = 'green';
// });

list.forEach(function (eachList) {
  eachList.addEventListener("click", function () {
    let className = this.classList[0];

    let color = "";
    if (className === "red") {
      color = "#ff7675";
    }
    if (className === "green") {
      color = "#55efc4";
    }
    if (className === "blue") {
      color = "#74b9ff";
    }
    if (className === "pink") {
      color = "#fd79a8";
    }
    if (className === "purple") {
      color = "#a29bfe";
    }

    bodyTag.style.backgroundColor = color;
  });
});
