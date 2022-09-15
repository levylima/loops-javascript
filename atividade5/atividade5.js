const prompt = require('prompt-sync')()

let i = 0;
let soma = 0;

do {

    i = Number(prompt('Digite um número do teclado:'))

    soma += i


} while (i != 0)

console.log(`A soma dos números digitados no teclado é de ${soma}`)