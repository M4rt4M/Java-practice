/* Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number. */

// My solution
const findLongestWordLength = str => {
  const words = str.split(' '); // more infor here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  let lengths = [];
  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
  }
  var maxL = Math.max(...lengths);
  return maxL;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// Alt solution 1
function findLongestWordLength1(str) {
  let words = str.split(' ');
  let maxLength = 0;
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

// Alt solution 2
function findLongestWordLength2(s) {
  return s.split(' ')
    .reduce(function(longest, word) { // more infor here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      return Math.max(longest, word.length)
    }, 0);
}

// Alt solution 3 - FAV
function findLongestWordLength3(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

// Alt solution 4
function findLongestWordLength4(str) {
  // split the string into individual words
  const words = str.split(" ");

  // words only has 1 element left that is the longest element
  if (words.length == 1) {
    return words[0].length;
  }

  // if words has multiple elements, remove the first element and recursively call the function
  return Math.max(
    words[0].length,
    findLongestWordLength(words.slice(1).join(" "))
  );
}
