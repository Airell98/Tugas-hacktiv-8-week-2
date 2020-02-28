function xo(str) {
	var a = 0;
	var b = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] == 'x') {
			a++;
		} else if (str[i] == 'o') {
			b++;
		} else {
			('');
		}
	}
	var total = a == b ? true : false;
	return total;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
