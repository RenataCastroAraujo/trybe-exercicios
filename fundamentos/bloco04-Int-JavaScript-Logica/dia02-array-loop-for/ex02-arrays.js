let menu = ["Menu", "Serviços", "Portfólio", "Links"];

let menuServices = menu[1]; //retorna o valor da posição 1
console.log(menuServices) 

let indexOfPortfolio = menu.indexOf("Portfólio"); //procura pela paralavra portfolio
console.log(indexOfPortfolio);

menu.push("Contato"); // adiciona um valor no final do array
console.log(menu);