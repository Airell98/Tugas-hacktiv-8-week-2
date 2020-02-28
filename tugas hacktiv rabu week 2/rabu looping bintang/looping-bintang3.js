// var rows = 1;
// var stars = '';
// for (rows; rows <= 5; rows++) {
//     for(var s = 1; s <= rows; s++ ) {
//         stars = stars + '*';
//     }
//     stars = stars +  '\n';
// }

// console.log(stars);

for (var i = 1; i <= 5; i++) {
    var char  = ''
    for (var j= 1; j<=i; j++) {
        char += '*'
    }
    console.log(char);
}


