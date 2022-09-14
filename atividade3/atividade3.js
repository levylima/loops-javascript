let totalMenor21=0
let totalMaior50=0
let idade = 0

while (idade != -99){
    idade = Number(prompt('Digite sua idade:'))

    if (idade < 21){
        totalMenor21++
    } else if (idade > 50){
        totalMaior50++
    }
}

document.write(`<br>A quantidade de pessoas com menos de 21 anos é de ${totalMenor21} pessoas.`);
document.write(`<br>A quantidade de pessoas com mais de 50 anos é de ${totalMaior50}`);