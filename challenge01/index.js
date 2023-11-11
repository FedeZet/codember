const fs = require('node:fs');

let data = fs.readFileSync('challenge01/message_01.txt', 'utf-8');

let palabras = data.toLowerCase().split(' ');

let contadorDePalabras = {}
palabras.forEach((palabra) => {
    if (!contadorDePalabras[palabra]) contadorDePalabras[palabra] = 0
    contadorDePalabras[palabra]++
})

let resultado = '';
Object.entries(contadorDePalabras).forEach((contador) => {
    resultado += `${contador[0]}${contador[1]}`
})

console.log(`submit ${resultado}`);

fs.writeFileSync('challenge01/result_01.txt', resultado);