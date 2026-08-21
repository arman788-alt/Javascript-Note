// function myfunction(){
//     document.write("Hello I am new");
// }


// function myfunction(){
//  document.getElementById('heading-2').innerText = 'Hello I am new';
// }



// function forDate(){
//     document.getElementById('para').innerText = Date();
// }




const makeRedButton = document.getElementById('make-Red');

// makeRedButton.onclick = function makeRed(){
//     document.body.style.backgroundColor = 'red';
// }



// arekta way:
makeRedButton.onclick = makeRed;


function makeRed(){
    document.body.style.backgroundColor = 'red';
}

