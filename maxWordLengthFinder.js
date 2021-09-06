/* Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number. */

const findLongestWordLength = str => {
  const words = str.split(' ');
  let lengths = [];
  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
  }
  var maxL = Math.max(...lengths);
  return maxL;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
