// Soal 2.a jelaskan kenapa baris 21,22,23 tidak dapat tampil?
// Pada baris 21 dilakukan pengecekan apakah variabel "terdaftar" memiliki nilai true
// karena sebelumnya nilai "terdaftar" adalah false maka tidak masuk pada pengecekan if

// Soal 2.b jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
// karena tipe dari variabel "nama" adalah const, const memiliki sifat dimana nilai tersebut tidak dapat diubah

// Soal 2.c Dengan melakukan komen pada baris ke 26, apakah baris 28 dapat di eksekusi? jelaskan.
// tidak, karena variabel asal juga mengalami error, karena "asal" merupakan local dan tidak bisa di panggil di global

// Soal 3
//Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a, Sita tersimpan dalam 
//variabel bernama b, dan Ayutersimpan dalam variable bernama c.
console.log("Soal no.3")
const foo = ['budi', 'Sita', 'Ayu'];
const [a,b,c] = foo;

console.log(a)
console.log(b)
console.log(c)

// Soal 4
// Kalian memiliki sebuah variabel berikut (let bdays = ['10-17','05-19','20-19']). Ubahlah tanda (-) dalam variabel 
//tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi [ '10/17', '05/19', '20/19' ]	
console.log("\nSoal no.4")
let bdays = ['10-17','05-19','20-19']
bdays = bdays.map(i =>{
    return i = i.replace(/-/g,"/")
})
console.log(bdays)
// Soal 5 
// Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). Kalikan setiap value dalam array tersebut dengan dua. Sehingga, 
// ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]
console.log("\nSoal no.5")
let value = [1,2,3,4,5,6]
value = value.map(i =>{
    return i * 2;
})
console.log(value)

// Soal 6
// Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) Bulatkan ke atas variable 
// tersebut sehingga output yang dihasilkan adalah [ 2, 3, 6, 13 ]
console.log("\nSoal no.6")
let arr = [1.5, 2.56,5.1, 12.33]
arr = arr.map(i =>{
    return Math.ceil(i)
})
console.log(arr)


