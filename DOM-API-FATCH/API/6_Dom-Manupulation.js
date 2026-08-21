// input box e kichu type korle seta button click event gotar maddhome onno div e sei text show korbe


document.getElementById("btn").addEventListener("click", () => {
  const inputvalue = document.getElementById("search-Box").value;
  console.log(inputvalue);

  const container = document.getElementById("comment-container");

  const p = document.createElement("p");
  //joto gula p tag create hobe sob gular commnon class name hbe child.
  p.classList.add("child");

  p.innerText = inputvalue;

  container.appendChild(p);


  //input box empty korte hole
  document.getElementById("search-Box").value = "";



  //like array of p tag = allcoment
  const allcoments = document.getElementsByClassName("child");

//   for (let i = 0; i < allcoment.length; i++) {
//     const element =  allcoment[i];
//   }


//shortcut
for (const element of allcoments){
    element.addEventListener("click", (e)=> {
        e.target.parentNode.removeChild(element);
    });
}
});














// note:
// input field er text dekhar jonno .value
// block element er text dekhar jonno .innerText

