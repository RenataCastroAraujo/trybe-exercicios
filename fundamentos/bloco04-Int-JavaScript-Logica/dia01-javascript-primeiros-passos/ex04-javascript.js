const currentHour = 18;
let message = "";

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir :D";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço";
} else if (currentHour < 11 && currentHour < 4) {
    message = "Humm, cheiro de café recém passado";
}

console.log(message)