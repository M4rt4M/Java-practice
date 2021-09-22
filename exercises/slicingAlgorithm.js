/* You are given two arrays and an index. Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs. */

// My solution
function frankenSplice(arr1, arr2, n) {
  let arr3 = arr2.slice(0, n);
  arr3.push(...arr1)
  for (let i=n; i<arr2.length; i++) {
    arr3.push(arr2[i])
  }
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Alt solution 1
// source: https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-slice-and-splice/301148
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

// Alt 2
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  return localArr;
}
