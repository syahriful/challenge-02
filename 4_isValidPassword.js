// Buatlah sebuah function yang berfungsi untuk melakukan pengecekan apakah password yang diberikan sebagai parameter
// memenuhi kreteria yang telah ditentukan atau tidak.

// Berikut kriteria password yang valid, apabila password tidak memenuhi kriteria dibawah ini, maka dinyatakan tidak valid:
// • Password harus memiliki panjang minimal 8 huruf
// • Password harus memiliki minimal 1 huruf besar
// • Password harus memiliki minimal 1 huruf kecil
// • Password harus memiliki minimal 1 angka

// function ini akan menerima satu parameter, yaitu:
// givenPassword ⇒ Password berupa string dan akan dicek oleh function tersebut.

// Kriteria function:
// 1. Beri nama function tersebut isValidPassword
// 2. function ini harus return data dengan tipe Boolean
// 3. function ini harus retrun data berupa true ATAU false
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.
function isValidPassword(givenPassword) {
  if (givenPassword === undefined) {
    return "ERROR : Tidak ada input pada parameter";
  } else if (typeof givenPassword !== "string") {
    return "ERROR : Invalid input tipe data, password harus berupa string";
  } // check apakah givenPassword kurang dari 8 karakter
  else if (givenPassword.length < 8) {
    return false;
  } // check ada tidaknya karakter Uppercase pada parameter givenPassword
  else if (!/[A-Z]/.test(givenPassword)) {
    return false;
  } // check ada tidaknya karakter lowercase pada parameter givenPassword
  else if (!/[a-z]/.test(givenPassword)) {
    return false;
  } // \d = digit, check ada tidaknya digit pada parameter givenPassword
  else if (!/\d/.test(givenPassword)) {
    return false;
  } else {
    return true;
  }
}

// EXPECTED RESULT

// Ketika function tersebut dipanggil
console.log(isValidPassword("Meong2021"));
// EXPECTED OUTPUT => true

// (Karena memenuhi requirement, Meong2021 terdiri dari 8 huruf, ada huruf besar,ada huruf
// kecil, dan ada angka)

console.log(isValidPassword("meong2021"));
// EXPECTED OUTPUT => false (Karena meong2021 tidak ada huruf besar)

console.log(isValidPassword("@eong"));
// EXPECTED OUTPUT => false (Karena @eong tidak ada angka dan terdiri hanya 5 huruf)

console.log(isValidPassword("Meong2"));
// EXPECTED OUTPUT => false (Karena Meong2 hanya 6 huruf)

console.log(isValidPassword(0));
// EXPECTED OUTPUT => ERROR : (Jelaskan ini errornya apa dan kenapa)

console.log(isValidPassword());
// EXPECTED OUTPUT => ERROR : (Jelaskan ini errornya apa dan kenapa)
