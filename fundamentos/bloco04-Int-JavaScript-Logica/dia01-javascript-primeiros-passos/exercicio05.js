//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const anguloA = 60;
const anguloB = 60;
const anguloC = -2;

const somaDosLados = anguloA + anguloB + anguloC;

const valorValido = anguloA > 0 && anguloB > 0 && anguloC > 00;

if (valorValido) {
    if (somaDosLados === 180) {
        console.log("True");
    } else {
        console.log("False");
    }
} else {
    console.log("Valor inválido");
}

