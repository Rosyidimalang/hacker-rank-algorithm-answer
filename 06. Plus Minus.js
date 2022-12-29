// soal :
// Diberi array bilangan bulat, hitung rasio elemen-elemennya yang positif, negatif, dan nol. Cetak nilai desimal setiap pecahan pada baris baru dengan 6 tempat setelah desimal.
// Catatan: Challenge ini menimbulkan masalah presisi. Kasus uji diskalakan ke enam tempat desimal, meskipun jawaban dengan kesalahan absolut hingga 10 -4 dapat diterima.

// Explanation
// Step 01: Buat tiga variabel bernama "positive", "negative", dan "zero". Simpan nilai awal sebagai nol (0).
// Step 02: Ulangi perulangan for melalui array yang diberikan.(sesuai jumlah array / array.length)
// Step 03: Saat mengulang array, kita harus menghitung berapa jumlah element yg positive, berapa jumlah element yg negative, dan berapa jumlah element yg zero.
// Step 04: Hitung rasio dengan membaginya with the array length.
// Step 05: Print the results.

// jawaban :
const plusminus = (array) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let index = 0; index < array.length; index++) {
    if (array[index] === 0) {
      zero++;
      // untuk mengecek array yang indexnya bernilai 0 ada berapa ?
    } else if (array[index] > 0) {
      positive++;
      // untuk mengecek array yang indexnya bernilai positive ada berapa ?
    } else {
      negative++;
      // untuk mengecek array yang indexnya bernilai negative ada berapa ?
    }
  }
  // console.log("zero", zero);
  // console.log("positive", positive);
  // console.log("positive", negative);
  console.log((zero / array.length).toFixed(6));
  console.log((positive / array.length).toFixed(6));
  console.log((negative / array.length).toFixed(6));
};
console.log(plusminus([1, 1, 0, -1, -1]));
console.log(plusminus([-4, 3, -9, 0, 4, 1]));

// This is a simple and fast solution:

// you can use the filter function to iterate in the array and get a new array only with the numbers that fulfill the condition; positive (n> 0), negative (n <0) and neutral (n == 0) numbers. In the same variable you can calculate the size of the returned array and divide it by the size of the original array, so you get the fraction, which you must format to only 6 decimal places with toFixed(6) and print an output in the requested format.

function plusMinus(arr) {
  let positive = arr.filter((number) => number > 0).length / arr.length;
  let negative = arr.filter((number) => number < 0).length / arr.length;
  let zeronums = arr.filter((number) => number == 0).length / arr.length;
  return console.log(positive.toFixed(6) + "\n" + negative.toFixed(6) + "\n" + zeronums.toFixed(6));
}
