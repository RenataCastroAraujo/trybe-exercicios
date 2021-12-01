//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let xadrez = "bispo";

switch(xadrez.toLowerCase()) {
    case "rei":
        console.log(xadrez + " Movimentos: em todas as direções, uma casa de cada vez");
        break;
    case "rainha":
        console.log(xadrez + " Movimentos: ao longo da horizontal,vertical e diagonais, sem pular outras peças");
        break;
    case "bispo":
        console.log(xadrez + " Movimentos: ao longo da diagonal, sem pular outras peças");
        break;
    case "cavalo":
        console.log(xadrez + " Movimentos: em forma de 'L', pode pular outras peças");
        break;
    case "torre":
        console.log(xadrez + " Movimentos: vertical ou horizontal, não pode pular outras peças");
        break;
    case "peão":
        console.log(xadrez + " Movimentos: apenas uma casa para frente e somente captura outras peças na diagonal");
        break;
    default:
        console.log("Peça inválida. Por favor, tente outra")
}   