function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//EXERCICIO 01 --------------------------------------------------------------------------------------------------------//
const listaDias = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const containerDias = document.querySelector('#days');
const btnContainer = document.querySelector('.buttons-container');


function diasDoMes() {
    for (let i = 0; i < listaDias.length; i += 1) {
        let criaClasse = document.createElement('li');

        if (listaDias[i] === 24 | listaDias === 31) {
            criaClasse.className = 'day holiday';
            criaClasse.innerHTML = listaDias[i];
            containerDias.appendChild(criaClasse);
        } else if (listaDias[i] === 4 | listaDias[i] === 11 | listaDias === 18) {
            criaClasse.className = 'day friday';
            criaClasse.innerHTML = listaDias[i];
            containerDias.appendChild(criaClasse);
        } else if (listaDias[i] === 25) {
            criaClasse.className = 'day holiday friday';
            criaClasse.innerHTML = listaDias[i];
            containerDias.appendChild(criaClasse);
        } else {
            criaClasse.className = 'day';
            criaClasse.innerHTML = listaDias[i];
            containerDias.appendChild(criaClasse);
        }
    };
};
diasDoMes();
//EXERCICIO 02 --------------------------------------------------------------------------------------------------------//
function btnFeriados(botão) {
    const criaBotao = document.createElement('button');
    criaBotao.innerHTML = 'Feriados';
    criaBotao.id = 'btn-holiday';
    btnContainer.appendChild(criaBotao);
};
btnFeriados('Feriados');
// EXERCICIO 03 -------------------------------------------------------------------------------------------------------//
function displayHolidays() {
    const btnFeriado = document.querySelector('#btn-holiday');
    const feriados = document.querySelectorAll('.holiday')
  
    function mudaFeriado() {
        for (let index = 0; index < feriados.length; index += 1) {
          if (feriados[index].style.backgroundColor === 'white') {
            feriados[index].style.backgroundColor = 'rgb(238, 238, 238)';
          } else {
            feriados[index].style.backgroundColor = 'white';
          }
        }
      }
    btnFeriado.addEventListener('click', mudaFeriado);
  };
  
  displayHolidays();
//EXERCICIO 04 -------------------------------------------------------------------------------------------------------//
function btnSextaFeira(botão) {
    const criaBotao = document.createElement('button');
    criaBotao.innerHTML = 'Sexta-Feira';
    criaBotao.id = 'btn-friday';
    btnContainer.appendChild(criaBotao);
};
btnSextaFeira('Sexta-Feira');
//EXERCICIO 05 --------------------------------------------------------------------------------------------------------//