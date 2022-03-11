// Buatlah sebuah function dengan nama changeWord yang berfungsi untuk
// menggantikan sebuah kata didalam sebuah kalimat.
// Function ini akan menerima 3 parameter, yaitu :
// 1. selectedText => Kata yang terdapat pada sebuah kalimat dan merupakan kata
// yang akan diganti nantinya.
// 2. changedText => Kata yang akan menjadi pengganti pada sebuah kalimat nantinya
// 3. text => Sebuah kalimat

function changeWord(selectedText, changedText, text) {
  // string.prototype.replace(searchValue, newValue)
  var text = text.replace(selectedText, changedText);
  return text;
}
const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

// Expected Result
// Ketika function tersebut dipanggil dengan variabel kalimat 1
console.log(changeWord("mencintai", "membenci", kalimat1));
// Maka output yang harus keluar :
// Output => 'Andini sangat membenci kamu selamanya'

// Ketika function tersebut dipanggil dengan variabel kalimat 1
console.log(changeWord("bromo", "semeru", kalimat2));
// Maka output yang harus keluar :
// Output => 'Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu'
