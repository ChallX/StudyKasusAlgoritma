var nilai1 = 10;
var nilai2 = 5;
var nilai3 = 89;
var nilai4 = 6;
var nilai5 = 8;
var nilai6 = 3;
var nilai7 = 29;
var nilai8 = 56;
var nilai9 = 72;
var nilai10 = 89;


var nilaiArray = [nilai1, nilai2, nilai3, nilai4, nilai5, nilai6, nilai7, nilai8, nilai9, nilai10];

var NilaiTertinggi = Math.max(...nilaiArray);
var TotalTertinggi = nilaiArray.findIndex(nilai => nilai == NilaiTertinggi);

console.log("Nilai Tertinggi adalah", NilaiTertinggi);
console.log("Siswa Yang Memiliki" , NilaiTertinggi , "Adalah" ,TotalTertinggi)

