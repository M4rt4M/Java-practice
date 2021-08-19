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

/* When you export a variable or function, you can import it in another file and use it without having to rewrite the code. 
You can export multiple things by repeating the first example for each thing you want to export, 
or by placing them all in the export statement. */

// IMPORTING
import { sum } from './functions.js';

/* Here, <import> will find <sum> in functions.js, import just that function for you to use, and ignore the rest. 
The ./ tells the import to look for the functions.js file in the same folder as the current file. 
The relative file path (./) and file extension (.js) are required when using import in this way. */

