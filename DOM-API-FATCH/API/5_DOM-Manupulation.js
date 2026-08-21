
// input box e kichu type korle seta button click event gotar maddhome onno div e sei text show korbe.
document.getElementById("btn").addEventListener("click", () => {

  const inputvalue = document.getElementById("search-Box").value;
  // console.log(inputvalue);

  const container = document.getElementById("comment-container");

  const p = document.createElement("p");
  p.innerText = inputvalue;

  container.appendChild(p);

  //input box empty korte hole
  document.getElementById("search-Box").value="";

});





// note:
// input field er text dekhar jonno .value
// block element er text dekhar jonno .innerText
