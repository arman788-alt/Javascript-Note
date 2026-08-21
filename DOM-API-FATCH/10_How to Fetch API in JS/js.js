// const url = 'http://127.0.0.1:5500/10_How%20to%20Fetch%20API%20in%20JS/api.text';

// fetch(url)
// .then(respone => respone.text())
// .then(data => console.log(data))

// --------------------------------------------------


function displayData() {
  fetch("http://127.0.0.1:5500/10_How%20to%20Fetch%20API%20in%20JS/api.text")
    .then((respone) => respone.text())
    .then((data) => {
       document.getElementById("pTag").innerHTML = data;
    });
}


// displayData();