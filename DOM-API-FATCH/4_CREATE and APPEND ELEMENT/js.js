// const div = document.createElement("div");

// const body = document.getElementById('bodyTag');
// body.appendChild(div);

// const headingOne = document.createElement('h1');
// headingOne.innerText = 'This is Title';
// div.appendChild(headingOne);

// const paraTag = document.createElement('p');
// paraTag.innerText = 'Lorem ipsum dolor sit amet.';
// div.appendChild(paraTag);

// const ul = document.createElement('ul');
// div.appendChild(ul);

// const list_1 = document.createElement('li')
// list_1.innerText = 'List-01';
// ul.appendChild(list_1);

// const list_2 = document.createElement('li')
// list_2.innerText = 'List-02';
// ul.appendChild(list_2);

// const list_3 = document.createElement('li')
// list_3.innerText = 'List-03';
// ul.appendChild(list_3);

// --------------------------------------------------------------------------------------------------------------------------

const bodyTag = document.getElementById("bodyTag");

const div = document.createElement("div");
div.style.backgroundColor = 'red';
div.style.padding = '50px';


div.innerHTML = `
<h1>This is title</h1>
<p>Lorem ipsum dolor sit amet.</p>

<ul style="background-color:blue">
    <li style="list-style-type:none">List 01</li>
    <li style="list-style-type:none">List 02</li>
    <li style="list-style-type:none">List 03</li>
</ul>

`;


bodyTag.appendChild(div);
