//Find the biggest length of name from the array.

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let bigName = friends[0];

for (let i = 0; i < friends.length; i++) {
  let element = friends[i];

  if (bigName.length < element.length) {
    bigName = element;
  }
}

console.log(bigName);



