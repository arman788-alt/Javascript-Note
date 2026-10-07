// DOM -> Document Object Model
// D -> HTML page is a Document(Html file)-> index.html
// O -> HTML Elemets are objects
// M -> HTML tree structure is the model

// এইচটিএমএল এলিমেন্টে DOM ব্যবহার করে খুব সহজেই CRUD (Create, Read, Update, Delete) অপারেশন চালানো যায়।
//  মূলত একটি ডাইনামিক ওয়েবসাইট তৈরি করতে এই চারটি কাজই সবথেকে বেশি লাগে।



// Using DOM We can Find / get, change, add, or delete HTML elements.

// How to find HTML Elements 
// document.getElementById()
// document.getElementsByTagName()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()



// finding element by ID
var h2 = document.getElementById("heading2");
console.log(h2)


// finding element by tagName
var h1 = document.getElementsByTagName("h1")[0];
console.log(h1)


// finding element by tagName
var p = document.getElementsByClassName("para")[0];
console.log(p)


// finding element by querySelector
var q1 = document.querySelector("#heading2");
console.log(q1)

//it will get the first element of the h1 elements
var q2 = document.querySelector("h1");
console.log(q2)

//it will get the first element of the para class
var q3 = document.querySelector(".para");
console.log(q3)

var list = document.querySelector(".my-div li");
console.log(list)

// finding element by querySelectorAll
var q4 = document.querySelectorAll(".para");
var first_para_class = document.querySelectorAll('.para')[0];
var sec_para_class = document.querySelectorAll('.para')[1];

console.log(q4)
console.log(first_para_class);
console.log(sec_para_class);

