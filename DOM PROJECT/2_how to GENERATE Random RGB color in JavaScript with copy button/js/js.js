const generateRGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
};

const updateColor = () => {
  const color = generateRGBColor();
  const colorBox = document.getElementById("colorBox");
  const colorCode = document.getElementById("colorCode");

  colorBox.style.backgroundColor = color;
  colorCode.innerText = color;
};



// RGB color Copy korar jonno
const copyColorCode = () => {
  const colorCode = document.getElementById("colorCode");
  const inputTag = document.createElement("input"); // একটি input এলিমেন্ট তৈরি করা
  document.body.appendChild(inputTag); // এটাকে বডিতে সাময়িকভাবে যুক্ত করা
  inputTag.value = colorCode.innerText; // ইনপুটের ভেতর কালার কোডটি রাখা

  inputTag.select(); // কোডটিকে সিলেক্ট করা
  document.execCommand("copy"); // ব্রাউজারের কপি কমান্ড রান করা
  document.body.removeChild(inputTag); // কাজ শেষ হলে ইনপুটটি রিমুভ করে দেওয়া
  alert("Color Copied to Clipboard");
};

document.getElementById("copyButton").addEventListener("click", () => {
  copyColorCode();
});



function GenerateNewColorBtn() {
  updateColor();
}

