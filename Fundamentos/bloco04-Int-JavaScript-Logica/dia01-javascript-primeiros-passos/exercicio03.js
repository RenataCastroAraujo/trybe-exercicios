//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 12;
const b = 6;
const c = 33;

if(a > b && a > c){
    console.log("A " + a + " é maior que B e C");
} else if(b > a && b > c){
    console.log("B " + b + " é maior que A e C");
} else {
    console.log("C " + c + " é maior que A e B")
}