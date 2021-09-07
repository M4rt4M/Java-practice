var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Inline comment

/* 
This is a multi-line comment.
I can write as much as I want.

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed
*/
console.log(myStr); //variable printed in the console
//console.log();

// Getting a specific letter from a string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

// Arrays - like lists
var myArray = [["first nested array", 7], ["second nested array", 0]];
var myData = myArray[0]; //first element from myArray

// EDITING ARRAYS

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]); //adds the element at the end of the array

var threeArr = [1, 4, 6];
var oneDown = threeArr.pop(); //removes the last element from the threeArr and stores it as a variable oneDown

var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = ourArray.shift(); //removes the first element from ourArray and stores it as a variable
ourArray.unshift("Happy"); //adds an element at the beginning of the list; now ourArray = ["Happy", "J", "cat"]

// Summary: add/remove at the beginning - <unshift/shift>, at the end - <push/pop>
// <unshift('a')> and <push("dog", 3)> can take multiple arguments
// <shift()/pop()> don't take arguments, they just remove 1 element at the beginning/end; however, this element can be assigned to a variable

// SPLICE(index_start, how many elements including the one at index_start to remove, what to insert instead (one or more, separated by commas)) - allows us to remove any number of consecutive elements from anywhere in an array

let array = ['today', 'was', 'not', 'so', 'great'];
array.splice(2, 2); // ['today', 'was', 'great']

// <splice()> not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements

let array = ['I', 'am', 'feeling', 'really', 'happy'];
let newArray = array.splice(3, 2); // newArray = ['really', 'happy']; array = ['I', 'am', 'feeling']

// SLICE(start_index, stop_index(not included)) - copies designated part of the array to a new array
// N.B. can be used on strings too

// Multi-Dimensional Arrays
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3];
arr[3][0];
arr[3][0][1];
//arr[3] is [[10, 11, 12], 13, 14], arr[3][0] is [10, 11, 12], and arr[3][0][1] is 11.

// Check For The Presence of an Element With indexOf()

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates'); //returns -1
fruits.indexOf('oranges'); // returns 2
fruits.indexOf('pears'); // returns 1 (the first index at which the element exists)

///////////////// ES6 ////////////////////////////////////////////

/* A new feature of ES6 is the template literal. This is a special type of string that makes creating complex strings easier.
Template literals allow you to create multi-line strings and to use string interpolation features to create strings.*/

const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// The example uses backticks (`), not quotes (' or "), to wrap the string.
const greeting = `Hello, my name is ${person.name}! 
I am ${person.age} years old.`; // ${variable} is a placeholder, you won't have to use concatenation with the + operator anymore
// The string is multi-line, both in the code and the output. This saves inserting \n within strings.

console.log(greeting); /* "Hello, my name is Zodiac Hasbro!
                           I am 56 years old." */

// NB. You can use it to create a list of items with some common parts, e.g. a menu on your website

// Combine Arrays with the Spread Operator

let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander']; // thatArray = ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
