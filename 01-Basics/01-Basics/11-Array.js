Concatenate Elements Into New Array
Concatenate means to join two things in succession.

The concat() method creates a new array that contains elements from the array on which concat is invoked followed by the arguments passed. If the argument is an array, the elements of the array will be inserted into the new array.
  const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];
const numbers = evenNumbers.concat(oddNumbers);
console.log(numbers);




Concatenate Elements Into New Array
Concatenate means to join two things in succession.

The concat() method creates a new array that contains elements from the array on which concat is invoked followed by the arguments passed. If the argument is an array, the elements of the array will be inserted into the new array.
  
const evenNumbers = [2, 4, 6];
const oddNumbers = [1, 3, 5];
const numbers = evenNumbers.concat(oddNumbers);
console.log(numbers);
Filter elements based on given condition
The filter() method creates a new array containing only certain elements from the array it is invoked on.

filter() accepts a function as an argument. It invokes that function on each element of an array.
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


Find element of an Array
The find() method accepts a test function as an argument, and executes the test function on each element of the array it is invoked on.

The value of first element of the array that passes the test function is returned.

The find() method returns undefined, in case no matching elements are found.
  const people = [
  {name:"sam", age: 17},
  {name:"Adam", age: 19},
  {name:"Smith", age: 21}
];
const isAdult = people.find(person => person.age >= 18);
console.log(isAdult);
