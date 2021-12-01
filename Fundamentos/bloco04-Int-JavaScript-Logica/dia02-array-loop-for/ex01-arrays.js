let aprendizados = ["Unix", "Bash", "GitHub", "Html"];

aprendizados.unshift("CSS"); //adiciona um item ao inicio do array
aprendizados.push("JavaScript"); // adiciona um item ao final do array

console.log(aprendizados);

aprendizados.pop(); // remove o ultimo item do array
aprendizados.shift(); // remove o primeiro item do array

console.log(aprendizados);

let index = aprendizados.indexOf("GitHub"); // .indexOf é utilizado para procurar um item no array
console.log(index);