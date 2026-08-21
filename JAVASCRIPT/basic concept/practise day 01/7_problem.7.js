//find the unique value from the array, avoid duplicate value.

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];

for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i];

  if (numbers[i] != numbers[i + 1]) {
    newArray.push(element);
  }
}

console.log(newArray);
