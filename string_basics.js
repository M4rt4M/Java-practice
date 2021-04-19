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
console.log(myStr);

// Getting a specific letter from a string
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length-1]; // Change this line
