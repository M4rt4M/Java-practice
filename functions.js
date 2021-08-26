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
  arr.push(item);
  var item = arr.shift();
  return item;
}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr)); // Before: [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // 1
console.log("After: " + JSON.stringify(testArr)); // After: [2,3,4,5,6]

// You can return Boolean values from functions
function isEqual(a,b) {
  return a === b;
}

// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

////////////////////// ES6 ///////////////////////////////////////////////////////////////////////////

/* Anonymous functions: 
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. 
Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else. */

const myFunc = function() { // this...
  const myVar = "value";
  return myVar;
}

const myFunc = () => { // ...is equivalent to this in ES6: <function name = () => {}>
  const myVar = "value";
  return myVar;
}

/* When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return 
as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements: */

const myFunc = () => "value";

// If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted:

const doubler = item => item * 2;

/* In order to help us create more flexible functions, ES6 introduces DEFAULT PARAMETERS for functions.
The default parameter kicks in when the argument is not specified (it is undefined).
ou can add default values for as many parameters as you want. */

const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John")); // prints "Hello John"
console.log(greeting()); // prints "Hello Anonymous"

/* ES6 introduces the REST PARAMETER for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. 
These arguments are stored in an array that can be accessed later from inside the function. The rest parameter eliminates the need to check the args array 
and allows us to apply map(), filter() and reduce() on the parameters array.*/

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); //You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); //You have passed 4 arguments.

//Like above, but written as an arrow function
const howMany = (...args) => "You have passed " + args.length + " arguments.";

//Sum of all arguments
const sum = (...args) => {
  let total = 0;
  for (let i=0; i < args.length; i++) {
    total +=args[i];
  }
  return total;
}

// Concise Declarative Functions with ES6

//ES5
const person = {
  name: "Taylor",
  sayHello: function() {
    return "Hello! My name is " + person.name + ".";
  }
};

console.log(person.sayHello()); 

//ES6
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

console.log(person.sayHello()); //same result in both cases: Hello! My name is Taylor.

// Use class Syntax to Define a Constructor Function

/* ES6 provides a new syntax to create objects, using the class keyword. It should be noted that the class syntax is just syntax, 
and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
In ES5, we usually define a constructor function and use the new keyword to instantiate an object. 
The class syntax simply replaces the constructor function creation. */

//ES5
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter'); 

//ES6
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

/*It should be noted that the class keyword declares a new function, to which a constructor is added. 
This constructor is invoked when new is called to create a new object. More to come with OOP.
[!] UpperCamelCase should be used by convention for ES6 class names, as in SpaceShuttle used above. */

// PROMISE

/* A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. 
When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. 
It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. 
<resolve> is used when you want your promise to succeed, and <reject> is used when you want it to fail. */

const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

/* The example above uses strings for the argument of these functions, but it can really be anything. 
Often, it might be an object, that you would use data from, to put on your website or elsewhere. */

