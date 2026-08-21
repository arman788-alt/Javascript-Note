// ১. প্রয়োজনীয় এলিমেন্টগুলো সিলেক্ট করি
const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");



// ২. বাটনে ক্লিক করলে কী হবে তা ঠিক করি
addBtn.addEventListener("click", function () {
  const taskValue = input.value; // ইনপুটের লেখাটি নিলাম

  if (taskValue === "") {
    alert("দয়া করে কিছু লিখুন!");
    return;
  }

  // ৩. নতুন একটি 'li' (List Item) তৈরি করি
  const listItem = document.createElement("li");
  listItem.innerText = taskValue;

  // ৪. একটি ডিলিট বাটন তৈরি করি
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "মুছে ফেলুন";
  deleteBtn.style.marginLeft = "10px";

  // ৫. ডিলিট বাটনে ক্লিক করলে ওই 'li' মুছে যাবে
  deleteBtn.addEventListener("click", function () {
    listItem.remove();
  });

  // ৬. 'li'-এর ভেতরে ডিলিট বাটনটি ঢুকিয়ে দিই
  listItem.appendChild(deleteBtn);

  // ৭. পুরো 'li' টিকে আমাদের মূল লিস্টে (ul) যোগ করি
  list.appendChild(listItem);

  // ৮. কাজ শেষে ইনপুট বক্স খালি করে দিই
  input.value = "";
});
