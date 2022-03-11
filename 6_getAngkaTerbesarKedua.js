// Buatlah sebuah function yang berfungsi untuk mendapatkan angka terbesar kedua dari sebuah array.

// Misal diberikan sebuah array yang terdiri dari beberapa angka [2,3,5,6,6,4], berdasarkan data dari array tersebut dapat kita
// simpulkan bahwasanya angka terbesar dari array tersebut adalah 6, angka kedua terbesar adalah 5, dan angka ketiga terbesar
// adalah 4. Maka dari itu function yang akan kamu buat ini akan me-return angka kedua terbesar pada array yang telah diberikan,
// yaitu angka 5.

// function ini akan menerima satu parameter, yaitu:
// 1. dataNumbers ⇒ Array yang berisi beberapa angka

// Kriteria function:
// 1. Beri nama function tersebut getAngkaTerbesarKedua
// 2. function ini harus return data dengan tipe number
// 3. function ini harus return data angka terbesar kedua dari angka-angka yang diberikan didalam array
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

// function getAngkaTerbesarKedua(dataNumbers) {
//   // typeof object karena array itu sebenarnya termasuk kedalam kategori object.
//   if (typeof dataNumbers !== "object") {
//     return "ERROR : Invalid input tipe data, data harus berupa array";
//   } else {
//     var dataNumbers = dataNumbers.sort(function (a, b) {
//       return b - a;
//     });
//     return dataNumbers[1];
//   }
// }

function getAngkaTerbesarKedua(dataNumbers) {
  if (dataNumbers === undefined) {
    return "ERROR : Tidak ada input pada Parameter dataNumbers";
  } // console.log(typeof dataAngka); => object, bukan array
  else if (typeof dataNumbers !== "object") {
    return "ERROR : Invalid input tipe data, parameter dataNumbers harus berupa array";
  } else {
    // memakai method sort() untuk mengurutkan data data ( default ASC )
    // dan callback sort compare function yang mengambil dua parameter yaitu a dan b
    var dataNumbers = dataNumbers.sort(function (a, b) {
      // return b - a untuk mengurutkan dari terbesar ke terkecil / descending order
      return b - a;
    });
    // Karena yg diambil itu angka terbesar ke2, maka cukup diambil index ke 1
    // dari dataNumbers yang sudah di urutkan dari terbesar ke terkecil
    return dataNumbers[1];
  }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
// EXPECTED OUTPUT :
// 8

console.log(getAngkaTerbesarKedua(0));
// EXPECTED OUTPUT :
// "ERROR : Invalid input tipe data, data harus berupa array"

console.log(getAngkaTerbesarKedua());
// EXPECTED OUTPUT :
// "ERROR : Tidak ada input pada Parameter"
