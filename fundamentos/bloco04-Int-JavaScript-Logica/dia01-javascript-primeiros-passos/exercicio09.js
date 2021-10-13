//Escreva um programa que defina três números em constantes no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false .

const numeroA = 7;
const numeroB = 4;
const numeroC = 2;

let impar = false;

if (numeroA %2 ===1 || numeroB %2 ===1 || numeroC %2 ===1){
    impar = true;
};

console.log(impar)
