// Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah
// alamat email yang diberikan sebagai parameter, adalah alamat email yang formatnya
// benar atau tidak.

// Jika parameter yang diberikan adalah alamat email yang benar, maka function ini
// harus return VALID, namun apabila alamat email yang diberikan tidak benar
// formatnya, maka function harus return INVALID

// function ini akan menerima satu parameter, yaitu:
// 1. email ⇒ email yang akan dicek oleh function

// Kriteria function yang harus kamu buat:
// • function ini harus return data dengan tipe string
// • function ini harus return data dengan tipe string
// • function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
let checkTypeNumber = (givenNumber) => {
  if (!givenNumber) {
    return "Error: Bro where is the parameter?";
  } else if (typeof givenNumber !== "number") {
    return "Error: Invalid data type";
  } else if (givenNumber % 2 === 0) {
    return "GENAP";
  } else {
    return "GANJIL";
  }
};

function checkEmail(email) {
  // HINT => PAKE REGEX COBA GOOGLING
  var regex = /\S+@\S+\.\S+/;
  if (!email) {
    return "Error: Tidak ada input di parameter";
  } // check keberadaan simbol @ pada email yang diinputkan
  else if (!/@/.test(email)) {
    return "Error: Email tidak valid karena tidak adanya simbol '@'";
  } // regex.test(email) utk mencari kecocokan antara regex yang kita
  // tentukan dengan (email) yang diinputkan
  else if (regex.test(email) === true) {
    return "VALID";
  } else if (regex.test(email) === false) {
    return "INVALID";
  }
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkEmail("apranata@binar.co.id")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar.com")); // OUTPUT yang keluar => "VALID"
console.log(checkEmail("apranata@binar")); // OUTPUT yang keluar => "INVALID"
console.log(checkEmail("apranata")); // ERROR : (Jelaskan ini errornya apa dan kenapa)
console.log(checkTypeNumber(checkEmail(3322))); // ERROR : (Jelaskan ini errornya apa dan kenapa)
console.log(checkEmail()); // ERROR : ("Error: Tidak ada input di parameter";)
