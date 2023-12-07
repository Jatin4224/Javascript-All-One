/*
// Number values represent floating-point numbers like 37 or -9.25.
// The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.
const score = 400;
console.log(score);
// op- 400

// in dono k output m difference notice karo
const balance = new Number(100); //The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
console.log(balance);
//op-
// 400
// [Number: 100]

//example
console.log(balance.toString().length); //op-3
console.log(balance.toFixed(2)); //op-100.00
//The toFixed() method of Number values formats this number using fixed-point notation.
//syntax- toFixed(number)

////The toPrecision() method of Number values returns a string representing this number to the specified precision.
// examples-
const otherNumber = 23.8977;
console.log(otherNumber.toPrecision(3)); //23.9

const otherNumber = 123.8977;
console.log(otherNumber.toPrecision(3)); //op-124 (interview question)

const otherNumber = 1123.8977;
console.log(otherNumber.toPrecision(3)); //op-1.12e+3

//toLocaleString()-
// The toLocaleString() method of Number values returns a string with a language-sensitive representation of this number. In implementations with Intl.NumberFormat API support, this method simply calls Intl.NumberFormat.
//The Intl.NumberFormat object enables language-sensitive number formatting.
const hundreds = 1000000;
console.log(hundreds.toLocaleString());
//op-1,000,000

//Indian Number Sytem
const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));
//op-10,00,000

//max_value and min_value

Number.MAX_VALUE; // 2^1024 - 1, or approximately 1.7976931348623157E+308
Number.MIN_VALUE; //2^-1074
Number.MAX_SAFE_INTEGER;

//--------------Maths--------

console.log(Math);
console.log(Math.abs(-4)); //op-4 //absolute
console.log(Math.round(4.3)); //op - 4 //roundoff
//agar control karna h value upper wala choose hoga ya lower to -
console.log(Math.ceil(4.2)); //op-5 //top
console.log(Math.floor(4.2)); //op-4 //bottom

console.log(Math.min(3, 4, 6, 8)); //op-3
console.log(Math.max(3, 4, 6, 8)); //op-8

// sabse jyada use math lib ka -
console.log(Math.random()); //hamesha 0 to 1 k bich m aayegi
//value 0 to 10 ka range m chahiye-
console.log(Math.random() * 10 + 1); //o wale case ko avoid karne k liye + 1 kardiya
console.log(Math.floor(Math.random() * 10 + 1)); //lower value

//trick formula(dont forget)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
*/

Fix Precision of Decimal Numbers
Sometimes, we need to fix the precision for our decimal numbers. For example, we might need 2.43519 to be represented as 2.44. The toFixed() method fixes the number of digits after the decimal point.
  const exactValue = 4.34167;
const fixedValue = exactValue.toFixed(2);
console.log(fixedValue);


Get Numbers From String
The parseInt() function extracts an integer from a string.

The parseInt() function converts each character in the string to integer, until it encounters a non-numerical value.

It returns NaN if the string does not start with a numerical value, +, -, or 0X.

  const boxHeightString = "123px";
const boxHeightValue = parseInt(boxHeightString);
console.log(boxHeightValue);

////practice 
function explainParseInt(value) {
  console.log("Original Value:", value);
  let result = parseInt(value);
  console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  let result = parseFloat(value);
  console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");

