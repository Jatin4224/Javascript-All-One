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


// practice 
// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.


function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);
