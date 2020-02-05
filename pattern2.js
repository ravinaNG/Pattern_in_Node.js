const readline = require('readline-sync');
const user = readline.question('Type your number:- ');

let column = 1;
for(column; column<=user; column++){
    let pattern = '';
    let row = 1;
    for(row; row<=user; row++){
        pattern = pattern+column+' ';
    }
    console.log(pattern);
}