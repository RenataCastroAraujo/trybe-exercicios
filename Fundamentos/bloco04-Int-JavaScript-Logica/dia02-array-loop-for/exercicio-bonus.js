//1-Ordene o array numbers em ordem crescente e imprima seus valores
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//numbers.sort(function(a, b){return a-b});
//console.log(numbers)

for (let i = 0; i < numbers.length; i += 1) {
    for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
        if (numbers[i] < numbers[secondIndex]) {
            let posicao = numbers[i];
            numbers[i] = numbers[secondIndex];
            numbers[secondIndex] = posicao;
        }
    }
}
console.log(numbers)

//--------------------------------------------------------------------------------------------------------------//
//2-Ordene o array numbers em ordem decrescente e imprima seus valores;
for (let i = 0; i < numbers.length; i += 1) {
    for (let secondIndex = 0; secondIndex < i; secondIndex += 1) {
        if (numbers[i] > numbers[secondIndex]) {
            let posicao = numbers[i];
            numbers[i] = numbers[secondIndex];
            numbers[secondIndex] = posicao;
        }
    }
}
console.log(numbers)
//---------------------------------------------------------------------------------------------------------------//
//3-Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente do array anterior multiplicado pelo próximo. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (valor correspondente) e 9 (próximo valor). Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .
let multiplicado = [];

for (let i = 0; i < numbers.length; i+=1){
    if ( i +1 < numbers.length){
        multiplicado.push(numbers[i] * numbers[i + 1]);
    } else {
        multiplicado.push(numbers[i]*2);
    }
}


//para resolução foi consultado gabarito