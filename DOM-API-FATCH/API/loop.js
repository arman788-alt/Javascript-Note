var test = "test";
var friends = ["hero", 5, "Alom", { name: "arman", age: 23 }, ["rahim", "karim", 105]];

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

for (var i = 0; i < friends.length; i++) {
  // console.log(friends[i]);

  var element = friends[i];
  if (element == "Alom") {
    console.log("yess sir");
  } else {
    console.log("No sirr");
  }
}

alert()