// 1- Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
}
//----------------------------------------------------------------------------------------------------------------//
//2- Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
}
console.log(soma);
//-----------------------------------------------------------------------------------------------------------------//
//3- Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = 0;
for (let i = 0; i < numbers.length; i += 1) {
    mediaAritmetica += numbers[i];
}
let media = mediaAritmetica / numbers.length;
console.log(media)
//------------------------------------------------------------------------------------------------------------------//
//4- Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20");
}
//------------------------------------------------------------------------------------------------------------------//
//5-Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let maior = numbers[0];
for (let i = 0; i <= numbers.length; i += 1) {
    if (numbers[i] > maior) {
        maior = numbers[i];
    }
}
console.log("O maior valor é: " + maior)
//-------------------------------------------------------------------------------------------------------------------//
//6-Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 1) {
        impar += 1;
    }
}

if(impar ===0){
    console.log("Nenhum numero impar encontrado");
} else {
    console.log("Foram encontrados:" + impar + " numeros impares");
}
//---------------------------------------------------------------------------------------------------------------//
//7-Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (let i = 0; i < numbers.length; i+=1){
    if(numbers[i] < menor){
      menor = numbers[i]  
    }
}

console.log("O menor numero é: " + menor)
//-----------------------------------------------------------------------------------------------------------------//
//8-Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado

let contagem = [];
for (let i = 1; i <= 25; i +=1){
    contagem.push(i);
}
console.log(contagem)
//-----------------------------------------------------------------------------------------------------------------//
//9-Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (let i = 0; i < contagem.length; i+=1){
    let metade = contagem[i] / 2;
    console.log(metade)
}
