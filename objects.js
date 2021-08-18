/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties. However, you can also use numbers as properties. 
You can even omit the quotes for single-word string properties. However, if your object has any non-string properties, 
JavaScript will automatically typecast them as strings. */

var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};

/* There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to an array.
Dot notation is what you use when you know the name of the property you're trying to access ahead of time. */

var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; //* myObj["prop1"];
var prop2val = myObj.prop2; //* myObj["prop2"];

// for property names with a space you can only use square brackets, e.g. myObj["the first property"];

/* Another use of bracket notation on objects is to access a property which is stored as the value of a variable. 
This can be very useful for iterating through an object's properties or when accessing a lookup table. */

var dogs = {
  Fido: "Mutt",  
  Hunter: "Doberman",  
  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); //* returns "Doberman"

//* Changing OR adding new properties of an object

dogs.Fido = "Golden Retriever"; //* OR
dogs["Fido"] = "Yorkshire Terrier";

dogs["Yeontan"] = "Pomeranian";

// Deleting a property

delete dogs.Hunter;

// .hasOwnProperty(propname) for checking if property exists within an object

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return (obj[checkProp]);
  }
  return "Not Found";
}

console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house")); // Not Found
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet")); // kitten

// ES6

// Use let instead of var to declare a variable that cannot be changed
// If let is used inside a block, statement or expression, it only applies to that part
// const works in a similar way, but it's a read-only variable; typially should be declared with all caps
// Objects declared with let or const are still mutable, but you cannot use the variable identifier to point to a different array using the assignment operator

// Concise Object Literal Declarations Using Object Property Shorthand
