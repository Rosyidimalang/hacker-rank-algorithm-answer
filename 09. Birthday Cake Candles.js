// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example
// candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

function birthdayCakeCandles(candles) {
  let count = 0;
  let max = 0;
  for (let i = 0; i < candles.length; i++) {
    let num = candles[i];
    if (num > max) {
      max = num;
      count = 1;
    } else if (max == num) {
      count++;
    }
  }
  return count;
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
