// tugas 1

function shoutOut() {
	return 'Halo Function';
}

console.log(shoutOut());

// tugas 2
function calculateMultiply(num1, num2) {
	return num1 * num2;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// tugas 3
function processSentence(name, age, address, hobby) {
	return (
		'Nama saya ' +
		name +
		', umur saya ' +
		age +
		' tahun, alamat saya di ' +
		address +
		', dan saya punya hobby yaitu ' +
		hobby +
		'!'
	);
}

var nama = 'Agus';
var umur = 30;
var alamat = 'Jln. Malioboro, Yogjakarta';
var hobi = 'gaming';

var fullSentence = processSentence(nama, umur, alamat, hobi);
console.log(fullSentence);
