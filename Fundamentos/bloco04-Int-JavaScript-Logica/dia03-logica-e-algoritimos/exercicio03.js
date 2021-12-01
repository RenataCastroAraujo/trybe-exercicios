let n = 5;
let asterisco = '*';
let linha = '';
let base = n;

for (let i = 0; i <= n; i += 1) {
    for (let coluna = 0; coluna <= n; coluna += 1) {
        if (coluna < base) {
            linha = linha + ' ';
        } else {
            linha = linha + asterisco;
        }
    }
    console.log(linha);
    linha = '';
    base -=1;
};
