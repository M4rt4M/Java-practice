// Functions
function functionName() { //define function
  console.log("Hello World");
}

functionName(); //call function

// Multiple arguments
function functionWithArgs(x, y) {
  console.log(x+y);
}
functionWithArgs(2,9)
/* 
Variables which are defined outside of a function block have Global scope. This means, they can be seen everywhere in your JavaScript code.
Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
*/

// Return values 
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5); //=25

// Functions without 'return' - for changing global variables rather than returning a value
// Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();
console.log(addThree()); //undefined
console.log(sum); // 0 + 3 + 5 = 8

//NB Variables declared with the let keyword can have Block Scope, which is useful for re-declaring variables. 
//Variables declared inside a block {} cannot be accessed from outside the block:

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10 

function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  var item = arr.shift();
  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // After: [2,3,4,5,6]
