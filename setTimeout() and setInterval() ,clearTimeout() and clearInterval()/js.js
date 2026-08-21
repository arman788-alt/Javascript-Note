// 1. setTimeout(function, timeout)
// setTimeout(() =>{}, 3000)

const myfunc = () => {
  console.log("hahahah");
};

const value = setTimeout(myfunc, 3000);
console.log(value);

clearTimeout(value); //setTimeout kore then oitake cancel korar jonno eta use kori, orthat 3sec howar age cancel korbe.
clearInterval(value);



// 2. setInterval(function, timeout)
setInterval(myfunc, 2000);



