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

// Getting a specific letter from a string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line

// Arrays - like lists
var myArray = [["first nested array", 7], ["second nested array", 0]];
var myData = myArray[0]; //first element from myArray

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
