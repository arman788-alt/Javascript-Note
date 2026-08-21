function loadApiData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  const container = document.getElementById("parent-container");

  for (let post of data) {
    const div = document.createElement("div");

    div.style.backgroundColor = 'tomato';
    div.style.padding = '20px';
    div.style.margin= '20px';
    div.style.borderRadius = '5px';

    div.innerHTML = `
    <h2>Title: ${post.title} </h2>
    <p>Descr: ${post.body}</p>
    `;

    container.appendChild(div);
  }
}

// for loop:
// for(let i = 0; i<post.length; i++){
//     const p = document.createElement("p");
//     p.innerText = post[i].id;
//     div.appendChild(p);
//   }
