//lets assume we have to build ecommerce website
//to humko ek user ko website par bulakar usse ek regn form fill karwana h usme
//usme uska email ,name city sab chahiye or yh info kahi store karni padegi
//so lets see how to store -

//
//variables-jo change ho sakte h aage jakr
const accountId = 4224;
let accountEmail = "jai@gmail.com";
var accountPassword = "12345";
accountCity = "kota";

//accountId = 2 //not allowed kyuki const n iska value uppar fixed kardiya already

//const keywords:used to declare a variable that cannot be reassigned after its initial value has been set.
//It is used to create constants, which are values that are intended to remain unchanged throughout the program's execution

accountEmail = "jai@gmail.com";
accountPassword = "2121";
accountCity = "bundi ";

console.log(accountId);

console.log(accountEmail);
console.loge(accountPassword);
//sab variable ko ase print karwana bhot mehnat

//so, let's use - table method
// The console.table() method in JavaScript is used to display tabular data in a more organized and visually appealing way within the browser's developer console

console.table([accountId, accountEmail, accountPassword, accountCity]);

//NOTE: in js
// there is only 1 method to declare const
// but for a variables there are two  methods (let and var)
// or hum var use nahi karte h because pf issue in block scope and fucntional SCOPE
//so -> prefer not to use var

let accountState;
console, log(accountState);
//op - undefined
