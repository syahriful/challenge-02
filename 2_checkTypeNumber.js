// Buatlah sebuah function yang berfungsi mendeteksi apakah sebuah angka termasuk angka
// genap atau ganjil.
// Function ini akan menerima satu parameter, yaitu :
// 1. givenNumber ⇒ angka yang akan dicheck oleh function
// Kriteria function yang harus kamu buat:
// • Beri nama function tersebut checkTypeNumber
// • Menggunakan arrow function
// • function ini harus return data dengan tipe string
// • function ini harus retrun data berupa GENAP ATAU GANJIL
// • function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

let checkTypeNumber = (givenNumber) => {
  // check parameter
  if (!givenNumber) {
    return "Error: Bro where is the parameter?";
  } // check tipe data parameter
  else if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  } else if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

// EXPECTED RESULTS
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)); // OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)); // OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])); // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()); // OUTPUT yang keluar => "Error: Bro where is the parameter?"
