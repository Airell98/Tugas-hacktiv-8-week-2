// TUGAS 1
// looping pertama

var jumlah = 2;
console.log('Looping Pertama')
while (jumlah <= 20) {
	console.log(jumlah + ' - I love coding');
	jumlah += 2;
}

// looping kedua

var jumlah = 20;
console.log('Looping Kedua')
while (jumlah >= 2) {
	console.log(jumlah + ' - I love coding');
	jumlah -= 2;
}

// TUGAS 2
// looping pertama

var jumlah = 1;
console.log('Looping Pertama')
for (jumlah; jumlah <= 20; jumlah++) {
	console.log(jumlah + ' - I love coding');
}

var jumlah1 = 20;
console.log('Looping Kedua')
for (jumlah1; jumlah1 >= 1; jumlah1--) {
	console.log(jumlah1 + ' - I love coding');
}

// TUGAS 3

//ganjil genap

var angka = 1;

for(angka; angka <= 100; angka++) {
    if (angka % 2 === 0){
        console.log('Genap');
    } else {
        console.log('Ganjil');
    }
}

//pertambahan 2 dengan kelipatan 3

var nomor = 1;

for(nomor; nomor <= 100; nomor += 2) {
    if (nomor % 3 === 0){
        console.log(nomor + ' kelipatan 3');
    } else {
        console.log('');
    }
}

// pertambahan 5 dengan kelipatan 6

var number = 1;

for(number; number <= 100; number += 5) {
    if (number % 6 === 0){
        console.log(number + ' kelipatan 6');
    } else {
        console.log('');
    }
}

// pertambahan 9 dengan kelipatan 10 

var satuan = 1;

for(satuan; satuan <= 100; satuan += 9) {
    if (satuan % 10 === 0){
        console.log(satuan + ' kelipatan 10');
    } else {
        console.log('');
    }
}


