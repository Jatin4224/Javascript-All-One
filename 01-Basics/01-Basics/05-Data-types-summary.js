// jis tarah se data ko memory m rakha or access kara jata h us basis par data -two types:
// # 1) primitive
// 7 types
// 1)string
// 2)Number
// 3)Boolean
// 4)null
// 5)undefined
// 6)symbol:The Symbol() function returns the symbol value type. The value returned from Symbol() is unique
// 7)BigInt:With BigInts, you can safely store and operate on large integers even beyond the safe integer limit ( Number.MAX_SAFE_INTEGER ) for Numbers.

// Q)javascript is dynamically types language or statically types language?
// -JavaScript is a dynamically-typed language, you can go about declaring variables, functions, objects and anything without declaring the type

//defining symbol
/*
const id = symbol("123");
const anotherId = symbol("123");

console.log(id == anotherId); //op-false

//defining BigInt
const bigNumber = 2342324923923944n;

//#2) Refrence (Non primitve)

//1) Array
//2) objects
//3) functions


1) const heroes = ["hulk", "ironman", "shaktimann"];

2) let obj = {
    name:"jai",
    age: 20,
}

3)const myFunction = function() {
    console.log("hello world ");
}


// homework-find datatype of each using typeoffunction and make notes 
// read -> ecma documents - the type of operator
console.log(typeof scoreValue) 
console.log(typeof myFunction)//op - function object
//remaining non primitives ka type - function hi hota h 



//---------------Memory----------
// stack(primitive) , Heap(non-primitive)
//- jab bhi stack memory use hoti h usme jo bhi variable declare kara ho uska ek copy milta h 
//- jab bhi heap m ho usme apne ko reference milta h original value ka 


let mypetname = "charlie"
anothername = mypetname
let anothername = "babu"

console.log(mypetname)//op-charlie
console.log(anothername)//op-babu

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "jatin@gmail.com"

console.log(userOne.email); //op-jatin@gmail.com
console.log(userTwo.email)//op-jatin@gmail.com
*/
//check .excalidraw file for a diagram
