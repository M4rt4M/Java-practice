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

// Operations on arrays: .map
