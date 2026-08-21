//find the big number from the array.

var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

var bigNumber = numbers[0];

for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i];

  if (element > bigNumber) {
    bigNumber = element;
  }
}

console.log(bigNumber);
