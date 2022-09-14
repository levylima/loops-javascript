
let qtdPair=0
let qtdOdd=0

for (let i = 0; i < 10; i++) {
 const numberString = prompt(`Digite o ${i+1}º número:`)
 const number = Number(numberString)

    if (number % 2 == 0){
        qtdPair++
    } else if (number % 2 != 0){
        qtdOdd++
    }
}

    console.log(`A quantidade de números pares é de ${qtdPair} números.`)
    console.log(`A quantidade de números ímpares é de ${qtdOdd} números.`)



