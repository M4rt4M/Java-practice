Math.random() // generates a random decimal number between 0 (inclusive) and 1 (exclusive)
Math.floor()
Math.ceil()
Math.min()
Math.max()

var radix = 1; //the base of the number in the string
parseInt("string", radix); // returns an integer from a string with a base of radix, e.g. parseInt("11", 2) will return 3 because 11 is 3 in binary system

// Operate on a long string/sentence with split()
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[3]); // expected output: "fox"

// Checking the type of the variable

/* typeof : This checks whether the value is one of the primitive data types. 
It will return a string specifying the type — "undefined" / "string" / "number" / "boolean" / "object" etc. */
var a = 5;
if(typeof a == "number") 
	console.log("Numeric value");
else
	console.log("Not a number");

/* instanceof : This checks the "kind" of an object. For example, Javascript arrays are basically objects. Using this we can check whether a given value represents an array.
instanceof will return a boolean true / false depending on whether the value is an instance of a given object or not. */
var a = [1, 2, 3];
if(a instanceof Array)
	console.log("Represents an array");
else
	console.log("Does not represent an array");

// Operations on arrays: .map
