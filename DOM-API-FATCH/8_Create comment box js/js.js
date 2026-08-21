document.getElementById("comment-btn").addEventListener("click", () => {
  const commentBox = document.getElementById("comment-box");
  const commentBoxValue = commentBox.value;

  const commentPlace = document.getElementById("comment-place");

  const makePtag = document.createElement("p");
  makePtag.style.width = "100%";
  makePtag.style.backgroundColor = "blueviolet";
  makePtag.style.color = "black";
  makePtag.style.padding = "20px";
  makePtag.style.borderRadius = "10px";

  makePtag.innerText = commentBoxValue;

  commentPlace.appendChild(makePtag);

  commentBox.value = "";
});
