const readLine = require('readline-sync');

const sorteiaNumero = (numero, resultado) => {
  if (numero !== resultado) {
    return console.log(`Opa, não foi dessa vez. O número era ${resultado}`)
  } 
  return console.log('Parabens!Você acertou ');
};

const jogarNovamente = () => {
  const numeroAleatorio = Math.floor(Math.random() * 10 + 1);
  const chute = readLine.questionInt('Digite um numero inteiro de 0 a 10. ');
  sorteiaNumero(chute, numeroAleatorio);
  const novoJogo = readLine.question("Jogar novamente? Digite S para sim ou N para não ");
  if(novoJogo === "S"){
    jogarNovamente();
  }
}
jogarNovamente();