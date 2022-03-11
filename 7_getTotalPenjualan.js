// Hari ini Toko Pak Aldi berhasil menjual banyak
// sepatu. Pada gambar disamping terdapat data
// sepatu-sepatu yang terjual dari toko Pak Aldi
// dalam bentuk array of object.

// Tugas kamu adalah membuat sebuah function
// yang berfungsi membantu Pak Aldi untuk
// menghitung total seluruh sepatu yang terjual.

// function ini akan menerima satu parameter,
// yaitu:

// 1. dataPenjualan ⇒ Array yang berisi beberapa
// object, object terdiri dari properti yang
// memiliki informasi penjualan product.

// Kamu bisa copy data diatas di :
// https://gist.github.com/aldipee/58e5ddb90dcfbc8f53bcde97c0239991

// Soal
// Kriteria function:
// 1. Beri nama function tersebut getTotalPenjualan
// 2. function ini harus return data dengan tipe number
// 3. function ini harus return total penjumlahan dari properti totalTerjual pada data yang diberikan
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualan) {
  // variabel utk menampung total penjualan
  let totalPenjualan = 0;
  // looping utk menghitung total penjualan dengan menghitung total dari semua
  // objek totalTerjual pada dataPenjualan
  for (let i = 0; i < dataPenjualan.length; i++) {
    totalPenjualan += dataPenjualan[i].totalTerjual;
  }
  return totalPenjualan;
}

// EXPECTED RESULT
// Ketika Function tsb dipanggil dengan variabel dataPenjualanPakAldi

console.log(getTotalPenjualan(dataPenjualanPakAldi));
// EXPECTED OUTPUT => 307
// 307 dari mana? dari setiap value property 'totalTerjual', yaitu 90+37+90+90
