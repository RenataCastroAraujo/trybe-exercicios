const readLine = require('readline-sync');

const peso = readLine.questionFloat("Qual o seu peso?(Em kilos) ");
const altura = readLine.questionInt("Qual sua altura?(Em centimetros) ");

const calculaImc = (peso, altura) => {
  const alturaMetros = altura / 100;
  const alturaAoQuadrado = alturaMetros ** 2;
  const calcIMC = peso / alturaAoQuadrado;
  return calcIMC;
}
  const result = calculaImc(peso, altura);
  const imc = `Seu imc é: ${result.toFixed(2)} `;
  if (result < 18.5) {
    console.log(`${imc} Situação: Abaixo do peso (magreza)`);
    return;
  }

  if (result >= 18.5 && result < 25) {
    console.log(imc, 'Situação: Peso normal');
    return;
  }

  if (result >= 25 && result < 30) {
    console.log(imc, 'Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (result >= 30 && result < 35) {
    console.log(imc, 'Situação: Obesidade grau I');
    return;
  }

  if (result >= 35 && result < 40) {
    console.log(imc, 'Situação: Obesidade grau II');
    return;
  }

