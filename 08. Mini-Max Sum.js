// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  // Write your code here
  arr.sort();
  let minimum = 0;
  let maximun = 0;
  for (let i = 1; i < arr.length; i++) {
    maximun += arr[i];
  }
  for (let i = 0; i < arr.length - 1; i++) {
    minimum += arr[i];
  }
  console.log(`${minimum} ${maximun}`);
}
console.log(miniMaxSum([1, 2, 3, 4, 5]));
