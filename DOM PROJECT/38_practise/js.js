const GenerateRGBColor = () =>{
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    return `rgb(${red}, ${green}, ${blue})`

};

const updateColor = () =>{
    let color = GenerateRGBColor();
    let colorBox = document.getElementById('colorBox');
    colorBox.style.backgroundColor = color;

    let colorCode = document.getElementById('colorCode');
    colorCode.innerText = color;

};


document.getElementById('colorGenerateBtn').addEventListener('click', function(){
    updateColor();
});

const colorCodeCopied = () =>{
    let colorCode = document.getElementById('colorCode');

    let inputTag = document.createElement('input');
    document.body.appendChild(inputTag);

    inputTag.value = colorCode.innerText;

    inputTag.select()
    document.execCommand('copy');
    document.body.removeChild(inputTag);
    alert("ColorCode Copied");
};



document.getElementById('copyCode').addEventListener('click', function(){
  
    colorCodeCopied();

});


