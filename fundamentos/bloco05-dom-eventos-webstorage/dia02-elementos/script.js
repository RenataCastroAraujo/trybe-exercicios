//Acesse o elemento elementoOndeVoceEsta .
let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta').parentElement;

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = ondeVoceEsta.parentElement;
pai.style.color = 'red';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Primeiro filho do filho';

//Acesse o primeiroFilho a partir de pai .
let primeiroFilho = pai.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let firstSon = ondeVoceEsta.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let atencao = ondeVoceEsta.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
let terceiroFilho = ondeVoceEsta.nextSibling;

//Agora acesse o terceiroFilho a partir de pai .
let terceiroFilhoDoPai = pai.lastElementChild.previousElementSibling;


