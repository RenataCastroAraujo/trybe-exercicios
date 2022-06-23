const readLine = require('readline-sync');

const distancia = readLine.questionInt('Qual a distância? (em metros)');
const tempo = readLine.questionInt('Qual o tempo? (em segundos)');

const velocidadeMedia = distancia / tempo;

console.log(`Velocidade média: ${velocidadeMedia} km/h`);