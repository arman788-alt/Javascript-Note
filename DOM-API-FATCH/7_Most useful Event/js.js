
// Common Mouse Events:

// 1.click
// 2.dblclick
// 3.mouseover / mouseout
// 4.mousemove
// 5.mousedown / mouseup

// document.getElementById('heading-tag').addEventListener('dblclick', (e) =>{
//     console.log(e);
// });




// document.getElementById('heading-tag').addEventListener('mousedown', (e) =>{
//     console.log(e);
// });



// document.getElementById('heading-tag').addEventListener('mouseup', (e) =>{
//     console.log(e);
// });




// document.getElementById('heading-tag').addEventListener('mouseenter', (e) =>{
//     console.log(e);
// });




// document.getElementById('heading-tag').addEventListener('dblclick', (e) =>{
//     console.log(e);
// });



// document.getElementById('heading-tag').addEventListener('mouseover', (e) =>{
//     console.log(e);
// });



// document.getElementById('heading-tag').addEventListener('mouseout', (e) =>{
//     console.log(e);
// });




// document.getElementById('heading-tag').addEventListener('mousemove', (e) =>{
//     console.log(e);
// });

// -------------------------------------------------------------------------------------------------------------------------------------
// keyboard key gula press korle jei jei event gula gotbe.
// keydown (key is pressed down)
// keyup (key is released)
// keypress (deprecated)


// document.getElementById('input-field').addEventListener('keydown', (e) =>{
//      console.log(e)
// });



// document.getElementById('input-field').addEventListener('keyup', (e) =>{
//     console.log(e)
// });



// document.getElementById('input-field').addEventListener('keypress', (e) =>{
//     console.log(e)
// });



// document.getElementById('input-field').addEventListener('focus', (e) =>{
//     console.log(e)
// });



// blur-> input box er baire click korle event fire hobe
// document.getElementById('input-field').addEventListener('blur', (e) =>{
//     console.log(e)
// });


// cut->input er bitorer text select kore cut korle event fire hobe
// document.getElementById('input-field').addEventListener('cut', (e) =>{
//     console.log(e)
// });




// document.getElementById('input-field').addEventListener('copy', (e)=> {
//         console.log(e)
// }); 



// document.getElementById('input-field').addEventListener('paste', (e)=> {
//     console.log(e)
// }); 


// -----------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------
// Note: submit button click korle page ta reload hoi, but modern juge ei reload stop kore rakhe sobai
// submit event
document.getElementById('form-tag').addEventListener('submit', (e)=>{
   e.preventDefault();
   console.log(e)
});