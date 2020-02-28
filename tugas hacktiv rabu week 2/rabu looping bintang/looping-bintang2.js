var stars = '';

for (var rows = 1; rows <= 5; rows++) {
    for (var s = 1; s <= 5; s++ ) {
        stars += '*';
    }
    stars += '\n';
}

console.log(stars);