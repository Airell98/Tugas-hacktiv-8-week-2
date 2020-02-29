// TUGAS 1

var rows = 1;

for (rows; rows <= 5; rows++) {
    console.log('*');
}

// TUGAS 2

 
var stars = '';

for (var rows = 1; rows <= 5; rows++) {
    for (var s = 1; s <= 5; s++ ) {
        stars += '*';
    }
    stars += '\n';
}

console.log(stars);

// TUGAS 3


for (var i = 1; i <= 5; i++) {
	var char = '';
	for (var j = 1; j <= i; j++) {
		char += '*';
	}
	console.log(char);
}
