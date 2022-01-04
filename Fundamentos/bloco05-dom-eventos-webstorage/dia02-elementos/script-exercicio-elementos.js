// 1-Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const body = document.querySelector('body');
const h1 = document.createElement('h1');
h1.innerText = 'Exercicio 5.2 - JavaScript DOM';
body.appendChild(h1);

//2-Adicione a tag main com a classe main-content como filho da tag body ;
const main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

//3-Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const sectionCenter = document.createElement('section');
sectionCenter.className = 'center-content';
main.appendChild(sectionCenter);

//4-Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraph = document.createElement('p');
paragraph.innerText = 'Meu pastel é mais barato';
sectionCenter.appendChild(paragraph);

//5-Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

//6-Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

//7-Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const image = document.createElement('img');
image.src = 'https://picsum.photos/200';
image.className = 'small-image';
sectionLeft.appendChild(image);

//8-Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const listaNaoOrdenada = document.createElement('ul');
const numbers = [
    'um',
    'dois',
    'tres',
    'quatro',
    'cinco',
    'seis',
    'sete',
    'oito',
    'nove',
    'dez',
];
for (let i in numbers) {
    const elementsList = document.createElement('li');
    elementsList.innerHTML = numbers[i];
    listaNaoOrdenada.appendChild(elementsList);
}
sectionRight.appendChild(listaNaoOrdenada);

//9-Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let i = 1; i <= 3; i += 1) {
    const h3 = document.createElement('h3');
    h3.innerText = 'Here';
    main.appendChild(h3);
}

//10-Adicione a classe title na tag h1 criada;
const title = document.querySelector('h1');
h1.className = 'title';

//11-Adicione a classe description nas 3 tags h3 criadas;
const description = document.getElementsByTagName('h3');
for (let i = 0; i < 3; i += 1) {
    description[i].className = 'description';
}


//12-Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
const leftContent = document.getElementsByClassName('left-content')[0];
main.removeChild(leftContent);

//13- Centralize a `section` criado no passo 6 (aquele que possui a classe `right-content`). Dica: para centralizar, basta configurar o `margin-right: auto` da `section`;
const central = document.getElementsByClassName('right-content')[0];
central.style.marginRight = 'auto';


//14- Troque a cor de fundo do elemento pai da `section` criada no passo 3 (aquela que possui a classe `center-content`) para a cor verde;
const centerContent = document.getElementsByClassName('center-content')[0];
centerContent.parentNode.style.backgroundColor = 'green';

//15-Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
listaNaoOrdenada.lastChild.remove();
listaNaoOrdenada.lastChild.remove();
