// const { sumar, multiplicar } = require('./modulo');
import randomInteger from 'random-int';
import cryptoRandomString from 'crypto-random-string';


// usando CommonJs y require
// const num1 = 1;
// const num2 = 4;
// const suma = sumar(num1, num2);
// const multiplicacion = multiplicar(num1, num2);

// importacion de modulos y publicados en NPM

const numRamdom = randomInteger(100);
const numRamdomInterval = randomInteger(100,500);

console.log(numRamdom);
console.log(numRamdomInterval);

const textRamdom = cryptoRandomString({length: 10});
console.log(textRamdom);




