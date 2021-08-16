/* Sometimes you may want to store data in a flexible Data Structure. 
A JavaScript object is one way to handle flexible data. 
They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects. */

var ourMusic = [ // complex data structure is an array, so needs []
  { //each object is contained within {} - JSON format
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ //nested array
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true //comma after every property of the object except for the last one
  } 
];

// Accessing nested objects

ar ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
console.log(ourStorage.cabinet["top drawer"].folder2); //secrets
console.log(ourStorage.desk.drawer); //stapler

// Accessing nested arrays

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
console.log(ourPets[0].names[1]); //Fluffy
console.log(ourPets[1].names[0]); //Spot

// Use [] when the value-key pairs/properties are stored as variables

// ***Record Collection Exercise***
// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (prop != "tracks" && value != "") { //If prop isn't tracks and value isn't an empty string, update or set that album's prop to value
    records[id][prop] = value;
  } else if (prop == "tracks" && records[id].hasOwnProperty("tracks") == 0) { 
    //If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it
      var tracks = [];
      records[id][prop] = tracks;
      records[id][prop].push(value);
  } else if (prop == "tracks" && value != "") { //If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array
      records[id][prop].push(value);
  } else if (value == "") {
    delete records[id][prop]; //If value is an empty string, delete the given prop property from the album
  }
  return records; //Your function must always return the entire record collection object
}

// ES6

// Destructuring Assignment

const user = { name: 'John Doe', age: 34 };

// ES5 example
const name = user.name; //John Doe
const age = user.age; //34

// ES6 equivalent
const { name, age } = user; //name = 'John Doe' and age = 34

/* Destructuring allows you to assign a new variable name when extracting values. 
You can do this by putting the new name after a colon when assigning the value. */
const { name: userName, age: userAge } = user; //now, userName = 'John Doe' and userAge = 34

// NB This is used to collect values from object's properties; it does not change the original object

// Using Destructuring Assignment to Assign Variables from Nested Objects

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age: userAge, email: userEmail }} = user; //userAge = 34 and userEmail = 'johnDoe@freeCodeCamp.com'

/* ES6 introduces the SPREAD OPERATOR, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected. 
(...arr) returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. */

//So, this
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);//89

//Can be similified to this
const maximus = Math.max(...arr); //89

//You can copy the contents of one array to another this way
let arr2 = [...arr];

// Use Destructuring Assignment to Assign Variables from Arrays

/* One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. 
Consequently, you cannot pick or choose which elements you want to assign to variables. */

// ES5
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); //1, 2

//ES6
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); //1 2 5

// Since we already have values assigned to a, b and c, we can swap them between these variables
[a, b, c] = [b, c, a];
console.log(a, b, c); //2 5 1

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

/* In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.
The result is similar to Array.prototype.slice(). */
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1 2
console.log(arr); // [3, 4, 5, 7] - whatever comes after the rest parameter <...>

// Combine rest parameter with destructuring assignment to skip some elements and assign the rest to another variable
const list = [1, 3, 'a', 'b', 5, 3, 2, 6, 'd'];
const [,,...arr] = list;
console.log(arr); //['a', 'b', 5, 3, 2, 6, 'd']


