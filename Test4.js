var m;
var d;
var totaldetik = 5440;

if (totaldetik > 3600) {
    let j = Math.floor(totaldetik/3600);
    var sisadetik = totaldetik%3600;
    let m = Math.floor(sisadetik/60);
    let d = sisadetik%60;


    console.log(`Waktu yang tersisa adalah` , j ,`Jam`, m, `Menit`, d , `Detik`);
} 

