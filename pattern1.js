const readline = require('readline-sync');
const user = parseInt(readline.question('Just Type your number:- '));

var satars = "";
let column = 1;
for(column; column<=user; column++){
    let row = 1;
    for(row; row<=user; row++){
        satars = satars+"*"+" ";
    }
    console.log(satars);
    satars = "";
}