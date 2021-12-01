//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let n = 10;
let asterisco = '*';
let espaco = '';

for (let i = 0; i < n; i +=1) {
    espaco = espaco+asterisco;
};
for (let i = 0; i < n; i+=1){
    console.log(espaco);
}

