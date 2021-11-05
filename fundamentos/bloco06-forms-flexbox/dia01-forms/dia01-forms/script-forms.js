function criaOption () {
    const estados = document.getElementById('estado');
    const siglas = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let i = 0; i <siglas.length; i += 1){
        const criaOpcao = document.createElement('option');
        criaOpcao.innerText = siglas[i];
        criaOpcao.value = siglas[i];
        estados.appendChild(criaOpcao);
    }
}
criaOption();

//gabarito consultado