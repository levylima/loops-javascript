const prompt = require('prompt-sync')()

let media = 0;
let soma = 0;
let qtdM3 = 0;
let number

do {

     numberString = prompt('Digite um número inteiro:')
     number = Number(numberString)

    if (number % 3 == 0 && number != 0){
        soma += number
        qtdM3++

    }

} while ( number != 0 )

media = soma / qtdM3

console.log(`A média final dos números multiplos de 3 é de ${media}`)