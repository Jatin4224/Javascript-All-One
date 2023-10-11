//In JavaScript, you can define a function and pass it as an argument to another function. Such a function, is called a callback function.
setTimeOut(function () {
  console.log("timer");
}, 5000);
function x() {
}
x(function y (){
})
//javascript is a synchronous and single-threaded language but due to callbacks we can do async things inside javascript.

 
const sumOrProduct = (
  firstNumber,
  secondNumber,
  string,
  callback
) => {
  let result = 0;
  if (string === "sum") {
    result = firstNumber + secondNumber;
  } else {
    result = firstNumber * secondNumber;
  };

  callback(string, result);
};

const printResult = (string, result) => console.log(`The solution to the ${string} is ${result}.`);

sumOrProduct(3, 4, "sum", printResult);
sumOrProduct(6, 8, "product", printResult);
