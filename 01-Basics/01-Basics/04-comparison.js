//console.log(2 > 1);
//console.log(2 >= 1);
//console.log(2 < 1);
//console.log(2 == 1);
//console.log(2 != 1);
// yaha tak to best h koi problem nahi

//complex cases(comparing different data types )

//Many times, they don't give predictable results.
//That's why it's always advisable to compare data of the same data types.
//This is why TypeScript does not allow the comparison of different data types
console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //op-false
console.log(null == 0); //op - false
console.log(null >= 0); //op - true

//the reason is that an equality check == and comparison > < >= <= work differently.
//comparisons convert null to a number,treating it as 0.
//that's why(3) null >= 0 is true and (1) null > 0

console.log(undefined == 0); //OP-FALSE
console.log(undefined > 0); //OP-FALSE
console.log(undefined < 0); //OP-FALSE

//NOTE-
// ase comparisons ko avoide hi karna h .
// In javascript comparison and equality check are two different things

//--THE STRICT CHECK(===)--
// The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

console.log("2" === 2); //no conversion
