// Staircase detail
// This is a staircase of size n = 4

// #
// ##
// ###
// ####

// ts base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// Write a program that prints a staircase of size n.

function staircase(n) {
  // mendeklarasikan variabel yang akan menampung hasil akhir yang akan kita cetak
  let output = "";

  // loop untuk melacak jumlah keseluruhan baris (n)
  for (let i = 1; i <= n; i++) {
    // inner for loop untuk melacak ruang sebelumnya pada setiap baris
    // s harus dimulai pada n-1 yang dapat kita lihat dari gambar yang saya gambar
    // s harus lebih besar dari atau sama dengan i karena jumlah spasi berkurang dengan bertambahnya i
    // kurangi s bc jumlah ruang berkurang dengan bertambahnya i
    for (let s = n - 1; s >= i; s--) {
      output += " ";
    }

    // inner for loop to untuk melacak #s pada setiap baris
    // h harus dimulai dari satu karena baris pertama akan selalu memiliki satu #
    // h harus kurang dari atau sama dengan baris tempat kita berada karena h akan mendekati dan akhirnya sama dengan n
    // h meningkat karena kita menambah h menjadi i yang pada akhirnya akan sama dengan n
    for (let h = 1; h <= i; h++) {
      output += "#";
    }
    // new line
    output += "\n";
  }
  // log the final result
  console.log(output);
}
console.log("staircase");
console.log(staircase(5));

function staircase1(n) {
  // here we use just one for loop where i tracks the number of rows
  // the number of rows (i) should be less than or equal to n
  for (let i = 1; i <= n; i++) {
    // print out a " " n-i times and append a # i times
    // console log adds a new line by default

    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
console.log(staircase1(5));

let test3 = "satu\n dua";

console.log("test", test3);
