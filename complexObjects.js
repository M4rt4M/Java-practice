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

// Use Destructuring Assignment to Assign Variables from Arrays



