// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix arr is shown below:

// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9 = 15 . The right to left diagonal = 3 + 5 + 9 = 17 . Their absolute difference is [15-17]=2.

function diagonalDifference(arr) {
  var n = arr.length;
  // length of input array.
  var d1 = 0;
  var d2 = 0;
  // Looping the array and summing the diagonals.
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // finding the sum of primary diagonal
      if (i === j) {
        d1 += arr[i][j];
      }
      // finding the sum of secondary diagonal
      if (i + j === n - 1) {
        d2 += arr[i][j];
      }
    }
  }
  return Math.abs(d1 - d2);
}
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

function diagonalDifference1(arr) {
  // length of input array.
  const length = arr.length;
  let diagonal1 = 0;
  let diagonal2 = 0;

  // Looping the array and summing the diagonals. => (looping dari idx 0, idx 0 plus 1 selagi idx kurang dari 3)
  for (let i = 0; i < length; i++) {
    // Calculating the primary diagonal.
    diagonal1 += arr[i][i];
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += arr[length - 1 - i][i];
  }
  // return absolute difference value.
  return Math.abs(diagonal1 - diagonal2);
}
console.log(
  diagonalDifference1([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

function diagonalDifference2(arr) {
  let diagToRight = 0;
  let diagToLeft = 0;

  arr.forEach((el, idx) => {
    diagToRight += arr[idx][idx];
    el.reverse();
    diagToLeft += arr[idx][idx];
  });

  return Math.abs(diagToRight - diagToLeft);
}
console.log(
  diagonalDifference2([
    [-10, 3, 0, 5, -4],
    [2, -1, 0, 2, -8],
    [9, -2, -5, 6, 0],
    [9, -7, 4, 8, -2],
    [3, 7, 8, -5, 0],
  ])
);
