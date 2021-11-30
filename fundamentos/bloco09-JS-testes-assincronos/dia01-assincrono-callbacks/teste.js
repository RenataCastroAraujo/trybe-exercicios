
function soma(dados){
    const soma = dados.min + dados.max
    return soma
}

function somaDoJeitoDificil({max, min}){
    const soma = min + max
    return soma

}


obj = {min : 50, max: 60}
console.log(somaDoJeitoDificil(obj))
