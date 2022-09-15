const prompt = require('prompt-sync')();

let i = 0;
let qtdCalms = 0;
let qtdWNervous = 0;
let qtdMAggressive = 0;
let qtdOCalms = 0;
let qtdPNervous40 = 0;
let qtdCalmsM18 = 0;


while (i < 150) {
  const ageText = prompt('Type your age: ');
  const age = Number(ageText);
  console.log('Choose your sex:\n\n');
  console.log('1 - Man\n');
  console.log('2 - Women\n');
  console.log('3 - Others\n');
  const sexText = prompt('Choose the option of sex: ');
  const sex = Number(sexText);
  console.log('Choose the humor between:\n\n');
  console.log('1 - Calms\n');
  console.log('2 - Nervous\n');
  console.log('3 - Aggressive\n');
  const humorText = prompt('Choose the option of humor: ');
  const humor = Number(humorText);

  if (humor == 1) {
    qtdCalms++;
  }

  if (sex == 2 && humor == 2) {
    qtdWNervous++;
  }

  if (sex == 1 && humor == 3) {
    qtdMAggressive++;
  }

  if (sex == 3 && humor == 1) {
    qtdOCalms++;
  }

  if (humor == 2 && age > 40) {
    qtdPNervous40++;
  }

  if (humor == 1 && age < 18) {
    qtdCalmsM18++;
  }

  i++;
}

console.log(`\nThe total number of calm people is ${qtdCalms}`);
console.log(`\nThe total number of nervous womens ${qtdWNervous}`);
console.log(`\nThe total number of Aggressive mans ${qtdMAggressive}`);
console.log(`\nThe total number of other calm${qtdOCalms}`);
console.log(`\nThe total number of nervous people over 40 years old is ${qtdPNervous40}`);
console.log(`\nThe total number of calm up to 18 years old is ${qtdCalms18}`);