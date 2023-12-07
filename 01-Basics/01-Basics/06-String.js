// The String object is used to represent and manipulate a sequence of characters.
// Strings can be created as primitives, from string literals, or as objects, using the String() constructor:
// declaring string method 1
const name = "jatin";
const repoCount = 50;

// console.log(name + repoCount + "value")//bhot bekaar syntax

console.log(`Hello my name is ${name} and repo count is ${repoCount}`); //mst syntax

// declaring string method 2

const gameName = new String("jatin");

//character acess
// There are two ways to access an individual character in a string. The first is the charAt() method:
// (1)
"jatin".charAt(1); //op-a

//(2)treat the string as an array-like object, where individual characters correspond to a numerical index

console.log(gameName[0]); //op-j
console.log(gameName.__proto__); //op={}(object)

console.log(gameName.length); //op-8
console.log(gameName.toUpperCas()); //op-JATIN
console.log(gameName.indexOf("a")); //op- 1(position of a)

//more methods- try all
// String length
// String slice()// negative values bhi de sakte h bhot baar use hoga yh method
const newString = gameName.substring(0, 3); //note-idhar negative nahi de sakte
console.log(newString);

const anotherString = gameName.slice(-5, 3);
console.log(anotherString);
// String substring()
// String substr()
// String replace()
const url = "https://jatin.com/jatin%20sharma";
console.log(url.replace("%20", "-")); //op-https://jatin.com/jatin-sharma
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
const newStringOne = "       jatin       ";
console.log(newStringOne);
console.log(newStringOne.trim()); //spaces remove kardeta h
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

console.log(url.includes("jatin")); //op-true
console.log(url.includes("setu")); //op-false

//split jatin-is-great based on dash(-)
const gameName = new String("jatin-is-great");
console.log(gameName.split("-"));

////read about remaining datatypes- mdn docs


//practice 
// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
  console.log("Original String:", str);
  console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
  console.log("Original String:", str);
  console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
  console.log("Original String:", str);
  console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
  console.log("Original String:", str);
  console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
  console.log("Original String:", str);
  console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
  console.log("Original String:", str);
  console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
  console.log("Original String:", str);
  console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
  console.log("Original String:", str);
  console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
  console.log("Original String:", str);
  console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");
