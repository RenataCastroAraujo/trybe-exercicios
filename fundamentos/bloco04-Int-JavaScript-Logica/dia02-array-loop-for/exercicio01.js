//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let soma = 0;
for (let i = 0; i < numbers.length; i +=1) {
    soma += numbers[i];
}
console.log(soma);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let mediaAritmetica = 0;
for (let i = 0; i < numbers.length; i +=1) {
    mediaAritmetica += numbers[i];
} 
let media = mediaAritmetica / numbers.length;
console.log(media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20");
}