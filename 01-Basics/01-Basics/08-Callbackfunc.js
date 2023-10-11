//In JavaScript, you can define a function and pass it as an argument to another function. Such a function, is called a callback function.
setTimeOut(function () {
  console.log("timer");
}, 5000);
function x() {
}
x(function y (){
})
//javascript is a synchronous and single-threaded language but due to callbacks we can do async things inside javascript.

 
