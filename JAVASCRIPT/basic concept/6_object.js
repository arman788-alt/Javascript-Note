// An Object is a variable that can hold many variables.
// Objects are collections of key-value pairs, where each key (known as property names) has a value.
// obejct e method and property thake.
//js er object holo, python er class ar dictionary er combination.



let result = 9;

const person ={
    name:"Arman",
    hand:2,
    eye:2,
    hair:"black",
    friends: result,
    hobby:["swiming", "travelling", "cricket"],

    // nested object
    father:{
        name: "amin ullah",
        age:60,
        soon:["Arafat", "Arman", "Ashraf", "Redowan"],
    },

    //method
    call: function call(){
        console.log("please call me");
    }

    // get_name(){
    //     return this.name; //python er self er moto
    // }

     
};

// console.log(person);
// console.log(person.hand);
// console.log(person.hobby);
console.log(person['name'])



// console.log(person.father.name);
// console.log(person.father.age);
// console.log(person.get_name());
person.call.call();

person.name = "shawon"

console.log(person);
