jumlahBaju = 0;
totalBaju = 20;

// for(jumlahBaju; jumlahBaju < totalBaju; jumlahBaju++){

// }

// if(jumlahBaju == totalBaju){
//     console.log('Cuci bajunya dong, bajunya udah ' + jumlahBaju)
// } else{
//     console.log('Jangan dulu')
// }
while (jumlahBaju < totalBaju) {
	jumlahBaju++;
	if (jumlahBaju == totalBaju) {
		console.log('Mulai cuci, bajunya udah ' + jumlahBaju);
	} else {
		console.log('Jangan dulu, jumlahnya masih ' + jumlahBaju);
	}
}
