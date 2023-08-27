/*
let score = "44";

console.log(typeof score); //op-string
console.log(typeof score); //op-string

// converting string to number

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //op-number


//NOTE - yh ho kya raha h idhar

let score = "44abc";

console.log(typeof score); //op-string
console.log(typeof score); //op-string

// converting string to number

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //op-number
console.log(valueInNumber); //NaN-par yhto number nahi h

//lets check for null
let score = null; //op - 0

//check for undefined
let score = undefined; //op - undefined

//check for boolean
let score = true; //op-1

//notes-
// "33" -> 33
// "33abc" -> NaN
//true -> 1;
//false -> 0


// let isLoggedIn = 1;

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);//op-true

// let isLoggedIn = "";

// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); //op-false

let isLoggedIn = "jatin";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //op-true

//notes -
// 1 => true;
// "" => false;
// "jatin" => true;

let sumNumber = 33;

let stringNumber = String(sumNumber);
console.log(stringNumber); //op-33
console.log(typeof stringNumber); //op-string

//------------operations------------

let value = 3;
let negValue = -value;

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);//power
// console.log(2/3);
// console.log(2%3);

let str1 = "jatin";
let str2 = "sharma";
let str3 = str1 + str2;
console.log(str3);
//op- jatin sharma

//complex cases
console.log("1" + 2);
//op-12
console.log(1 + "2");
//op-12
console.log("1" + 2 + 2);
//op - ky laga 14 aayega ? wrong
//      122 aaya
console.log(1 + 2 + "2");
//op - ab ky laga 122 aayega? again wrong
//     32 aayega
//reason- type conversion docs
console.log(3 + ((4 * 5) % 3));

//isko ase bhi  likh sakte h
console.log(((3 + 4) * 5) % 3);



console.log(+true);//op-1
console.log(true+);//op-err
console.log(+"");

let num1, num2, num3
 num1 = num2 = num3 = 2 + 2

 let gameCounter = 100
 gameCounter++;
 console.log(gameCounter);//op-101

 let gameCounter = 100
 ++gameCounter;
 console.log(gameCounter);//op-101

 link to study -
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
 - https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion

 // complex cases conclusion - itna bura code likhna hi nahi h pull request hi merge nahi hogi sidha bhar nikaldenge company se itna bura code likha to

*/
