// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data))

// ------------------------------------------------------

function loadApiData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayData(data));
}



function displayData(data) {
  const divTag = document.getElementById("divTag");

  data.map((user) => {
    const p = document.createElement("p");
    p.innerText = user.name;
    divTag.appendChild(p);
  });
}




// for of loop
// for(let user of data){

// }
