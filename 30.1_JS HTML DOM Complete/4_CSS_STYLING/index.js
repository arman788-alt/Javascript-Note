// Adding & removing css style in js

var h1 = document.querySelector("h1");
h1.innerHTML = "hiiii"
console.log(h1);

//add css style
h1.classList.add('heading-style');
console.log(h1);

//removing css style
// h1.classList.remove('heading-style') 





// Note:
// DOM দিয়ে CSS change:

// Syntax:
// element.style.property = "value";

// Example:
// heading.style.color = "red";
// heading.style.fontSize = "30px";
// heading.style.backgroundColor = "yellow";

// CSS              JavaScript
// background-color → backgroundColor
// font-size        → fontSize
// text-align       → textAlign
// border-radius    → borderRadius
// margin-top       → marginTop


// Class দিয়ে:
// element.classList.add("className");
// element.classList.remove("className");
// element.classList.toggle("className");
// element.classList.contains("className");


// Important:
// style → সরাসরি CSS property change
// classList → CSS class add/remove করে