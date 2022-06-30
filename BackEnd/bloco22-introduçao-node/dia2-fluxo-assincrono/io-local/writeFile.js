const fs = require('fs').promises;

//sem async/await

// fs.writeFile('./meu-arquivo.txt', 'Meu textão')
//   .then(() => {
//     console.log('Arquivo escrito com sucesso!');
//   })
//   .catch((err) => {
//     console.error(`Erro ao escrever o arquivo: ${err.message}`);
//   });

//com async/await

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Meu textão');
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main()