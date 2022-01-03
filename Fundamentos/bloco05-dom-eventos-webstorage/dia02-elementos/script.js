// //Acesse o elemento elementoOndeVoceEsta .
// let ondeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
// console.log(ondeVoceEsta);

// //Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
// let pai = ondeVoceEsta.parentElement;
// pai.style.color = 'red';
// console.log(pai);

// //Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
// let primeiroFilhoDoFilho = ondeVoceEsta.firstElementChild;
// primeiroFilhoDoFilho.innerText = 'Primeiro filho do filho';
// console.log(primeiroFilhoDoFilho);

// //Acesse o primeiroFilho a partir de pai .
// let primeiroFilho = pai.firstElementChild;
// console.log(primeiroFilho);

// //Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
// let firstSon = ondeVoceEsta.previousElementSibling;
// console.log(firstSon);

// //Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
// let atencao = ondeVoceEsta.nextSibling;
// console.log(atencao);

// //Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
// let terceiroFilho = ondeVoceEsta.nextSibling;
// console.log(terceiroFilho);

// //Agora acesse o terceiroFilho a partir de pai .
// let terceiroFilhoDoPai = pai.lastElementChild.previousElementSibling;
// console.log(terceiroFilhoDoPai);

//Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById('pai');
const irmaoOndeVoceEsta = document.createElement('section');
irmaoOndeVoceEsta.id = 'irmaoOndeVoceEsta';
pai.appendChild(irmaoOndeVoceEsta);

//Crie um filho para elementoOndeVoceEsta .
const ondeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filhoOndeVoceEsta = document.createElement('section');
filhoOndeVoceEsta.id = 'filhoOndeVoceEsta';
ondeVoceEsta.appendChild(filhoOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho .
const primeiroFilhoDoPrimeiroFilho = document.getElementById ('primeiroFilhoDoFilho')
const filhoDoPrimeiroFilho = document.createElement('section');
filhoDoPrimeiroFilho.id = 'filhoDoPrimeiroFilhoDoFilho';
primeiroFilhoDoPrimeiroFilho.appendChild(filhoDoPrimeiroFilho);

//A partir desse filho criado, acesse terceiroFilho .
const terceiroFilho =
  filhoDoPrimeiroFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroFilho);
