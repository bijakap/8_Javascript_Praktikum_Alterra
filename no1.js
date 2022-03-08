var a = 5;
let b = "Kampus Merdeka";
let nama = "Budi"; // sebelumnya deklarasi varibelnya const
let terdaftar = true; // sebelumnya bernilai false
let lengkap_arr = [a,b, nama, terdaftar]

function perkenalan(){
    let asal = "indonesia";
    return console.log(
        "Perkenalan nama saya " + 
        lengkap_arr[2] + // sebelumnya menggunakan variabel  nama
        " nomor urut " +
        a +
        " Sekerang sedang mengikuti " +
        b +
        " berasal dari " +
        asal
    )
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka")
}

a = b;
nama = b;

// console.log("asal diakses = "+ asal);
console.log("a adalah = "+ a);
console.log("b adalah = " + b);


// (Soal 1.a) Ambillah index ke 2 dalam array
console.log("Array = " + lengkap_arr[2])

// (Soal 1.b) AUbah kode diatas sehingga dapat menampilkan baris 22 di dalam console. 
//  mengganti nilai pada baris 4 menjadi true, sebelumnya Kondisi awal false, dan menonaktifkan baris 28 karena terjadi error

// (Soal 1.c) Lakukan pemanggilan untuk function perkenalan pada baris 31
perkenalan()

// (Soal 1.D) mengubah kode di atas sehingga menampilkan output
// Menonaktifkan baris 28, karena variabel "asal" merupakan variable local tidak bisa di panggil diluar function
// Mengganti deklarsi variabel pada baris 3, karena pada baris 26 ada reassign jadi harus dirubah
// Mengganti nilai variabel pada baris 4, agar masuk kedalam kondisi if




