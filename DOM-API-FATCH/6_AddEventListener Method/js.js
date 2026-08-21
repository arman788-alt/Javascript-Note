
// const forAlert = document.getElementById('forAlert');

// forAlert.addEventListener('click', function makeAlert(){
//   alert("Hello Alert");
// });



// document.getElementById('make-Green').addEventListener('click', function(){
//     document.body.style.backgroundColor = 'green';
// });




// document.getElementById('change-text').addEventListener('click', function(){
//     document.getElementById('change-text').innerText ="Clicked";
//     document.getElementById('heading-tag').innerText = "ami change hoye gesi";
// });



// -----------------------------------------------------------
// input box er bitor kichu likhe button click korle p tag er bitore input box er value ta show korbe
document.getElementById('for-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    // console.log(inputField);
    // console.log(inputField.value);

    const inputFeildValue = inputField.value;

    const paraTag = document.getElementById('para-tag');
    paraTag.innerText = inputFeildValue;

    inputField.value = '';
});












// Note:
// anonymous function/call back function -> jei function er name thake nah, ar jei function gular name thake tader name function bole.

// input tag er bitore text dekhar jonno .value diye access korte hoi..kintu onno tag belai .innerText
