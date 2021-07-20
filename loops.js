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

// DO {} WHILE () loop will execute once before checking the condition
// and WHILE (){} will only start executing if the condition is met in the first place

// Recursion

// Fuction that multiplies first n elements of an array and returns the product of this multiplication
function multiply(arr, n) {
    if (n <= 0) { // base case employed if no recursion has happened or used in recursion
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1]; // n-1 because count is between 1st [0] and nth [n-1] elements
    }
  }

// PRACTICE

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
  // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (name == contacts[i]["firstName"]) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        } 
    }
    return "No such contact";
  // Only change code above this line
}
