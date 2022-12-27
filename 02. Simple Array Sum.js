// Given an array of integers, find the sum of its elements.

// For example, if the array : ar = [1,2,3] 1 + 2 + 3 , so return 6.

function simpleArraySum(ar) {
  const array = ar.reduce((all, num) => all + num);
  return array;
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
