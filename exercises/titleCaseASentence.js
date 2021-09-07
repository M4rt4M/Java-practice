/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of */

// Solution
function titleCase(str) {
  let array = str.toLowerCase().split(' ');
  var result = array.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
