// Hari ini Toko buku milik Ibu Daniela berhasil menjual banyak
// sekali buku-buku novel. Gambar disamping adalah data
// penjualan buku-buku novel yang dijual di Toko buku milik
// Ibu Daniela, dalam format array of object.

// Tugas kamu adalah membuat sebuah function yang
// berfungsi membantu Ibu Daniela untuk mendapatkan
// informasi berupa Total Keuntungan, Total Modal, Produk
// Buku Terlaris, Penulis Buku Terlaris dan Persentase
// Keuntungan dari data penjualan yang telah disediakan
// diatas. function yang kamu buat ini akan me-return sebuah
// data yang berbentuk sebuah object yang dari beberapa
// properti.

// Kamu bisa copy data pada gambar disamping di :
// https://gist.github.com/aldipee/941b140a3b3a53c518fd82be846e4f7a
// Soal

// function ini akan menerima satu parameter, yaitu:
// 1. dataPenjualan ⇒ Array yang berisi beberapa object, object terdiri dari properti yang memiliki informasi penjualan product.

// Kriteria function:
// 1. Beri nama function tersebut getInfoPenjualan
// 2. function ini harus return data dengan tipe object
// 3. Data object harus berisi properti seperti yang dijelaskan sebelumnya yaitu totalKeuntungan, totalModal, produkBukuTerlaris,
// persentaseKeuntungan, dan penulisTerlaris
// 4. function ini harus memiliki validasi terhadap tipe data dari parameter yang diterima.

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // deklarasi variabel untuk menampung data
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkBukuTerlaris = "";
  let persentaseKeuntungan = 0;

  // arrow function untuk konversi menjadi rupiah
  let convertToRp = (angka) => {
    let rupiah = "";
    // konversi angka menjadi string => split / dipisah tiap karakternya => reverse / dibalik agar dapat
    // lebih mengenali format rupiah berdasarkan tiap 3 digit yang terdeteksi.
    // posisi karakter2nya => join / disatukan kembali
    let angka2 = angka.toString().split("").reverse().join("");
    // looping untuk mengubah angka menjadi rupiah, jika angka yang dikonversi adalah 3 digit,
    // maka akan ditambahkan titik dengan menggunakan .substr(i, 3) + "."
    for (let i = 0; i < angka2.length; i++) if (i % 3 == 0) rupiah += angka2.substr(i, 3) + ".";
    return (
      "Rp. " +
      rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("")
    );
  };

  // Looping menghitung totalKeuntungan dan totalModal
  for (let i = 0; i < dataPenjualan.length; i++) {
    totalKeuntungan += dataPenjualan[i].totalTerjual * (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli);
    totalModal += dataPenjualan[i].hargaBeli * (dataPenjualan[i].sisaStok + dataPenjualan[i].totalTerjual);
  }

  // Mencari Buku terlaris dengan sorting buku yang paling banyak terjual -> mengambil item pertama / index 0
  // dari data yang sudah disort secara Descending / Terbesar ke terkecil.
  produkBukuTerlaris = dataPenjualan.sort((a, b) => b.totalTerjual - a.totalTerjual)[0].namaProduk;

  // Menjumlahkan Total Buku yang terjual apabila ada penulis yang sama
  let holder = {};
  // menggunakan forEach utk iterasi pada array data penjualan dengan parameter 'd', dimana d ini
  // menandakan element array yang di iterasi.
  dataPenjualan.forEach(function (d) {
    // .hasOwnProperty untuk mengecek apakah property (penulis) ada di dalam object, jika ada maka
    // akan menambahkan nilai dari totalTerjual ke property (penulis) yang sama.
    if (holder.hasOwnProperty(d.penulis)) {
      holder[d.penulis] += d.totalTerjual;
    } else {
      holder[d.penulis] = d.totalTerjual;
    }
  });

  let penulisTerlaris = [];
  // Looping untuk mengirim data yang sudah dijumlahkan ke array penulisTerlaris
  // agar dapat kita sorting berdasarkan nilai totalTerjual yang paling besar.
  for (let properti in holder) {
    penulisTerlaris.push({
      penulis: properti,
      totalTerjual: holder[properti],
    });
  }

  // % Keuntungan = totalKeuntungan / totalModal (100%)
  persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    // memanggil function utk konversi hasil number ke format rupiah (string)
    totalKeuntungan: convertToRp(totalKeuntungan),
    totalModal: convertToRp(totalModal),
    // konversi ke format string dan membulatkan number ditambah persenannya dengan Number.prototype.toFixed() + "%".
    persentaseKeuntungan: persentaseKeuntungan.toFixed(0) + "%",
    produkBukuTerlaris,
    // sorting dan ambil penulis dengan total semua buku si penulis yang sudah terjual
    penulisTerlaris: penulisTerlaris.sort((a, b) => b.totalTerjual - a.totalTerjual)[0].penulis,
  };
}

// EXPECTED RESULTS
// Ketika Function tersebut dipanggil dengan variabel dataPenjualanNovel
console.log(getInfoPenjualan(dataPenjualanNovel));
