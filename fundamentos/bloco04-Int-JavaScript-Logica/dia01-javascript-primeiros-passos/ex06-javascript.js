let candidato = "lista";

switch (candidato) {
    case "aprovado":
        console.log("Você foi aprovada(o)");
        break;
    case "lista":
        console.log("Você está na lista de espera");
        break;
    case "reprovado":
        console.log("Infelizmente você não foi aprovado");
    default:
        console.log("Não se aplica")
}