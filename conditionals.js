//In order for JavaScript to compare two different data types (for example, numbers and strings), it must convert one type to another (Type Coercion).
function equalityTest(val1, val2) {
  if (val1 == val2) {
     return "Equal";
  }
  return "Not equal";
}

console.log(equalityTest(1, 1)); // Equal
console.log(equalityTest(1, 2)); // Not equal
console.log(equalityTest(1, "1")); // Equal
console.log(equalityTest('3', 3)); // Equal

/*
Strict (in)equality (=== and !==) is the counterpart to the (in)equality operator (== != >< >= <=). 
However, unlike the equality operator, which attempts to convert both values being compared to a common type, 
the strict equality operator does not perform a type conversion.
*/

function strictEqualityTest(val1, val2) {
  if (val1 === val2) {
     return "Equal";
  }
  return "Not equal";
}

onsole.log(equalityTest(1, 1)); // Equal
console.log(equalityTest(1, 2)); // Not equal
console.log(equalityTest(1, "1")); // Not equal
console.log(equalityTest('3', 3)); // Not equal

typeof 3 //returns 'number'
typeof '3' //returns 'string'

// Comparisons with the logical operators

// && = AND 

function testLogicalAnd(val) {
  if (val <=50 && val >= 25) {
    return "Yes";
  }
  return "No";
}

testLogicalAnd(30);
testLogicalAnd(3);

// || = OR

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);
testLogicalOr(155);

// ELSE
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);
