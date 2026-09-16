//Create, remove, add html element

// creating html element and adding to a div.
var firstDiv = document.querySelector("#first-div");
console.log(firstDiv)

var heading3 = document.createElement("h3");
var text = document.createTextNode("This is heading 3");
heading3.appendChild(text);
firstDiv.appendChild(heading3);

// -----------------------------------------------------------


var heading5 = document.createElement("h5");
var text = document.createTextNode("This is heading 5");
heading5.appendChild(text);
firstDiv.appendChild(heading5);

// ----------------------------------------------------------------

const divElement = document.createElement('div');
divElement.innerHTML = 'Armaaaaaan';
divElement.classList = 'red';
divElement.setAttribute('id', 'red');
divElement.setAttribute('title', 'Red Div');
const container = document.querySelector('.my-div');
container.appendChild(divElement);

// ---------------------------------------------------------------------


// remove element
firstDiv.removeChild(heading5);

// -------------------------------------------------------------------

//adding element before
var heading6 = document.createElement("h6");
var text = document.createTextNode("This is heading 6");
heading6.appendChild(text);
firstDiv.insertBefore(heading6, heading3);
// firstDiv.insertAfter(heading6, heading3);


// parent.insertBefore(newElement, existingElement);



// DOM → Create / Add / Remove Element

// 1. Create element:
//    document.createElement("h1")

// 2. Create text:
//    document.createTextNode("Hello")

// 3. Add text inside element:
//    heading.appendChild(text)

// 4. Add element inside parent:
//    parent.appendChild(heading)

// 5. Remove element:
//    parent.removeChild(child)

// 6. Add before another element:
//    parent.insertBefore(newElement, existingElement)

// 7. Add attribute:
//    element.setAttribute("id", "box")

// 8. Add class:
//    element.classList.add("red")