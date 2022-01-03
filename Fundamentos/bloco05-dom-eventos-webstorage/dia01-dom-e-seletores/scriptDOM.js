const paragrafo = document.getElementsByTagName('p')[1];
paragrafo.innerText =
  'Quero estar trabalhando com o que gosto e podendo viajar.';

const mudaCor = document.getElementsByClassName('main-content')[0];
mudaCor.style.background = 'rgb(76, 164, 109)';

const mudaCorBranco = document.getElementsByClassName('center-content')[0];
mudaCorBranco.style.background = 'white';

const h1 = document.getElementsByTagName('h1')[0];
h1.innerHTML = 'Exercicio 5.1 - JavaScript';

const paragraphUpper = document.getElementsByTagName('p')[0];
paragraphUpper.innerHTML = paragraphUpper.innerHTML.toUpperCase();

function showAllParagraphs() {
  const paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; i += 1) {
    console.log(paragraphs[i].innerHTML);
  }
}
showAllParagraphs();
