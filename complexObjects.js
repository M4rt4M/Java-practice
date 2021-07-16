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
