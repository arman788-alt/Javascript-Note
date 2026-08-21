/*
Finding HTML elements by 
1.id 
2.tag name 
3.class name
4.CSS selectors-> querySelector(), querySelectorAll()
*/


// Dom er maddhome Javascript file er moddhe Html file er jinis dhorte/Access korte pari
// The document object is the owner of all other objects(HTML element) in your web page.



// const findElemenet = document.getElementsByTagName("h2");
// const result = document.getElementById('unique');
// const result = document.getElementsByClassName('title');


/*querySelector-> Joto gular tag er moddhe ekoi className thakuk,but sudhu prothom class namer element ke dhorbe.
document.querySelector('.class / #id')
*/
// const result1 = document.querySelector('.List'); 
// const result2 = document.querySelector('#spanTag');



// innerText->শুধু টেক্সট পরিবর্তন করতে (ট্যাগ থাকলেও তা টেক্সট হিসেবে দেখাবে)
// const result2 = document.querySelector('#spanTag').innerText;


// const result2 = document.querySelector('#spanTag').innerText = "Updated Inner Text";



// innerHTML->এইচটিএমএল ট্যাগসহ পরিবর্তন করতে
// const result2 = document.querySelector('#spanTag').innerHTML = '<h1> Hello Programmers </h1>';


// const result2 = document.querySelector('.List').innerText = "Updated List";


//querySelectorAll-> List name e joto gula name ache sob gula ke ekti List akare dhorbe
const result = document.querySelectorAll('.List')


/*
document.querySelectorAll('.List').innerText -> diye direct change kora jayna, karon querySelectorAll dile Element er list pai, oi List er element ke change korar jonno Loop use korte hoi othoba index dhore.
*?

for(let i = 0; i < result.length; i++){
    result[i].innerText = "Hello, I'm a Programmers";
}























// for loop
// for (let i = 0; i < findElemenet.length; i++) {
//   console.log(findElemenet[i]);
// }



// of loop
// for(const oneElement of findElemenet){
//     console.log(oneElement);
    
// }

