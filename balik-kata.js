function balikKata(kata) {
	var letter = '';
	for (var i = kata.length - 1; i >= 0; i--) {
		letter += kata[i];
	}
	return letter;
}

console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
