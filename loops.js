// Iteration

// WHILE

var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}

// FOR
 /* For loops are declared with three optional expressions separated by semicolons: for (a; b; c), 
 where a is the intialization statement, b is the condition statement, and c is the final expression. */

var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
} //ourArray will now have the value [0,1,2,3,4]

// Iterate through an array

var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// Nesting FOR loops

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

// DO...WHILE and WHILE
