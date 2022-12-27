// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

function aVeryBigSum(ar) {
  let totalSum = 0;
  for (let i = 0; i < ar.length; i++) {
    totalSum += ar[i];
  }
  return totalSum;
}
console.log(aVeryBigSum([1001458909, 1004570889, 1007019111, 1003302837, 1002514638, 1006431461, 1002575010, 1007514041, 1007548981, 1004402249]));
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));

function aVeryBigSum(ar) {
  // Write your code here
  const array = ar.reduce((all, num) => all + num);
  return array;
}
