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

// ELSE IF 
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }  else if (val < 5) {
      return "Smaller than 5";
  } else {
      return "Between 5 and 10";
  }  
}

testElseIf(7);

// Selecting from Many Options with Switch Statements

/* If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements 
which define various possible values. Statements are executed from the first matched case value until a break is encountered.
case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.*/

function caseInSwitch(val) {
  var answer = "";
  switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta"
    break;
  } 
  return answer;
}

// remember about BREAK; after each set of statements

console.log(caseInSwitch(1)); //"alpha"

/* In a switch statement you may not be able to specify all possible values as case statements. 
Instead, you can add the default statement which will be executed if no matching case statements are found. 
Think of it like the final else statement in an if/else chain.*/

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  return answer;
}

console.log(switchOfStuff(1)); // "stuff"

// Multiple Identical Options in Switch Statements

// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.

function sequentialSizes(val) {
  var answer = "";
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1)); //"Low"
