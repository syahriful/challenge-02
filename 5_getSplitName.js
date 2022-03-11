// Buatlah sebuah function yang berfungsi untuk membagikan sebuah nama menjadi Nama Depan, Nama Tengah, Nama Belakang.
// Function ini nantinya akan menerima satu parameter yang berisi nama lengkap seseorang. Apabila nama lengkap dari seseorang
// tersebut lebih dari 3 suku kata, maka function tersebut harus menghasilkan sebuah error. Tapi apabila parameter yang diberikan
// valid (tidak lebih dari 3 suku kata), maka function ini akan menghasilkan sebuah object dengan properti firstName, middleName,
// lastName.

// function ini akan menerima satu parameter, yaitu:
// 1. givenNumber ⇒ angka yang akan dicheck oleh function

// Kriteria function:
// 1. Beri nama function tersebut getSplitName
// 2. function ini harus return data dengan tipe object
// 3. function ini harus return data dengan tipe object
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

function getSplitName(personName) {
  if (typeof personName !== "string") {
    return "ERROR : Invalid input tipe data, parameter personName harus berupa string";
  } else {
    // split berfungsi untuk memecah string menjadi array sehingga nanti dapat kita masukkan
    // tiap tiap array ke dalam object yang akan dimasukkan ke kategorinya masing masing
    var personName = personName.split(" ");
    if (personName.length > 3) {
      return "Error : This function is only for 3 characters name";
    } else {
      for (var i = 0; i < personName.length; ) {
        return {
          firstName: personName[i] || null,
          middleName: personName[i + 2] || null,
          lastName: personName[i + 1] || null,
        };
      }
    }
  }
}
// EXPECTED RESULT
// Ketika Function tersebut dipanggil

console.log(getSplitName("Aldi Daniela Pranata"));
// EXPECTED OUTPUT :
// { firstName: 'Aldi', middleName: 'Daniela', lastName: 'Pranata' }

console.log(getSplitName("Dwi Kuncoro"));
// EXPECTED OUTPUT :
// { firstName: 'Dwi', middleName: null, lastName: 'kuncoro' }

console.log(getSplitName("Aurora"));
// EXPECTED OUTPUT :
// { firstName: 'Aurora', middleName: null, lastName: null }

console.log(getSplitName("Aurora Aureliya Sukma Darma"));
// // EXPECTED OUTPUT :
// // "Error : This function is only for 3 characters name"

console.log(getSplitName(0));
// EXPECTED OUTPUT :
// "ERROR : ("ERROR : Invalid input tipe data, parameter personName harus berupa string")"
