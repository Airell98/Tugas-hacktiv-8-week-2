var tanggal = 6;
var bulan = 8;
var tahun = 2201;

switch (bulan) {
	case 1:
		bulan = 'Januari';
		break;
	case 2:
		bulan = 'Febuari';
		break;
	case 3:
		bulan = 'Maret';
		break;
	case 4:
		bulan = 'April';
		break;
	case 5:
		bulan = 'Mei';
		break;
	case 6:
		bulan = 'Juni';
		break;
	case 7:
		bulan = 'Juli';
		break;
	case 8:
		bulan = 'Agustus';
		break;
	case 9:
		bulan = 'September';
		break;
	case 10:
		bulan = 'Oktober';
		break;
	case 11:
		bulan = 'November';
		break;
	default:
		bulan = 'Desember';
		break;
}

switch (true) {
	case tanggal <= 31 && tanggal >= 1:
		tanggal;
		break;
	default:
		console.log('Salah masukkan tanggal');
		break;
}

switch (true) {
	case tahun <= 2200 && tahun >= 1900:
		tahun;
		break;
	default:
		console.log('Salah masukkan tahun');
}

console.log(tanggal, bulan, tahun);
