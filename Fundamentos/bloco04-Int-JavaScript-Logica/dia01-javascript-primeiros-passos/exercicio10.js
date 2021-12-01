//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custo = 12;
const venda = 36;

if (custo >=0 && venda >=0){
    const custoTotal = custo *1.2;
    const vendaTotal = (venda - custoTotal) * 1000;
    console.log(vendaTotal);
} else {
    console.log("Valor inválido");
}