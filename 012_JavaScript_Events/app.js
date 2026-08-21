// JavaScript Events

/*
    Click 👉 onclick
    Dubble Click 👉 ondblclick
    Right Click 👉 oncontextmenu
    Hover 👉 onmouseenter
    Hover Out 👉 onmouseout
  
  
    🔗 On Key press will only work on body or form 👉 onkeypress
    🔗 On Key up will only work on body just press up arraw key 👉 onkeyup
    🔗 On load will only work on body 👉 onload
    🔗 On resize will only work on body 👉 onresize
    🔗 On scroll will only work on body 👉 onscroll
*/

function subscribe() {
  document.getElementById('text').innerHTML = 'Subcribed';
  document.getElementById('btn').innerHTML = 'Subcribed';
  document.getElementById('btn').style.backgroundColor = '#262626';
}

function like() {
  document.getElementById('like').innerHTML =
    '<i class="fa-solid fa-thumbs-up"></i> Liked';
}

function keyPress() {
  document.getElementById('text').innerHTML = 'Key Presed 😊';
}

// function onLoad() {
//   alert('Testing javascript Onload');
//   document.getElementById('text').innerHTML = 'Website Loeaded Properly 😍';
// }

function windowResize() {
  document.getElementById('textarea').style.height = '100px';
  document.getElementById('form').style.fontFamily = 'Courier New';
  document.getElementById('form').style.color = '#ff0000';
}

function onScroll() {
  document.getElementById('text').innerHTML = 'Scrolling 😊';
}

// document.getElementById('btn').onclick = function () {
//   document.getElementById('btn').innerHTML = 'Subscribed 😍';
// };

document.getElementById('ul').addEventListener(
  'click',
  function (e) {
    console.log('UL Clicked');
  },
  true
);

document.getElementById('li').addEventListener(
  'click',
  function (e) {
    console.log('li Clicked');
  },
  true
);
