const allBox = document.getElementsByClassName("box");


for (let i = 0; i < allBox.length; i++) {
  const element = allBox[i];
  element.style.backgroundColor = "red";

  if (element.innerText == "box-5") {
    element.style.backgroundColor = "pink"
    // element.style.color= "black"
  }
  if(element.innerText=="box-6")
  element.style.backgroundColor="green"
  // element.style.color="red";

}

// ekhane html e common class name box, eta like of Array..ei array er moto(all box) box er opor loop chalaite pari.
// all box = html collection pabo