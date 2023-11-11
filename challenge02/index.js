const fs = require('node:fs');

let data = fs.readFileSync('challenge02/message_02.txt', 'utf-8');

let codigos = data.split('')

let encriptador = 0;
let resultado = [];
codigos.forEach((code) => {
    if (code == '#') encriptador = encriptador + 1
    else if (code == '@') encriptador = encriptador - 1
    else if (code == '*') encriptador = encriptador * encriptador
    else if (code == '&') resultado.push(encriptador)
})

console.log(`submit ${resultado.join('')}`);

fs.writeFileSync('challenge02/result_02.txt', resultado.join(''));
