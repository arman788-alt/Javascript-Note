//  parseInt and parseFloat and OCmments in 

// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer


var num1 = "12.5";//string
var num = 15;

// var result = num1 + num
// console.log(result)
// output: 12.515

// console.log(typeof result)
// output:string

//converted string to float
// var convertedNum = parseFloat(num1);
// var result = convertedNum + num;


var result = parseFloat(num1) + num;
console.log(result);
console.log(typeof result);

//converted string to integer
var result = parseInt(num1) + num;
console.log(result)
console.log(typeof result)




 
