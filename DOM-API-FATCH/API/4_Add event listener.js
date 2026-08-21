// const button = document.getElementById("btn");
// button.addEventListener("click", myfunction);

// function myfunction() {
//   console.log("hello world");
// }



//using arrow function:
// button e click event click korle function call hobe then function theke input box er text/value console e show korbe
document.getElementById("btn").addEventListener("click", ()=>{

     const inputvalue = document.getElementById("search-Box").value;
     console.log(inputvalue);

    // console.log("hello Boss");
});


// note:
// input field er text dekhar jonno .value
// block element er text dekhar jonno .innerText

// input box e kichu likhe tarpor add button e click kore sei likha ta jekono kothao show korbo tar jonno addEventListener use  korbo

// syntex:  element.addEventListener(event, function, useCapture);






