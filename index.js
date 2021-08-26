// EXPORTING

/* This file contains several functions related to operations you want to perform. 
One of them is stored in a variable <add>, that takes in two numbers and returns their sum. 
You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it. */

export const add = (x, y) => {
  return x + y;
} // like this, or...

const add = (x, y) => {
  return x + y;
}
export { add }; // ...like this

// IMPORTING
import { sum } from './functions.js';

/* Here, <import> will find <sum> in functions.js, import just that function for you to use, and ignore the rest. 
The ./ tells the import to look for the functions.js file in the same folder as the current file. 
The relative file path (./) and file extension (.js) are required when using import in this way. */

/* Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the <import * as> syntax. */

import * as myImportedFunctions from './functions.js';
/* The above import statement will create an object called myImportedFunctions. This is just a variable name, you can name it anything. 
The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property. */

myImportedFunctions.myFunc(7);
myImportedFunctions.sum(7, 11, -3, 44);

// DEFAULTS

/* When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 
You can export multiple things by repeating the first example for each thing you want to export, 
or by placing them all in the export statement. */

// Create an Export Fallback with export default

/* Above, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.
There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. 
It is also used to create a fallback value for a file or module. Below are examples using export default: */

export default function add(x, y) { //a named function
  return x + y;
}

export default function(x, y) { //an anonymous function
  return x + y;
}

/* Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. 
Additionally, you cannot use export default with var, let, or const. */

/* To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. 
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default 
export of the math_functions.js file is. You can use any name here when importing a default. */

import add from "./math_functions.js";
