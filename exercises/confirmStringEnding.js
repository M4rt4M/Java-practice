/* Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, 
we would like you to use one of the JavaScript substring methods instead. */

// My solution
function confirmEnding(str, target) {
  let compatibility = 0;
  for (let i = 0; i < target.length; i++) {
    (str[str.length-i-1] == target[target.length-i-1]) ? compatibility +=1 : compatibility +=0;
  }  
  return compatibility == target.length;
}

console.log(confirmEnding("Bastian", "n"));

// Alt 1
function confirmEnding1(str, target) {
  return str.slice(str.length - target.length) === target;
}

// Alt 2
function confirmEnding2(str, target) {
  return str.slice(-target.length) === target
}
