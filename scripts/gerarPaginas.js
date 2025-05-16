// Script para gerar 1000 páginas para cada template usando faker-js
const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

function gerarPaginas(template) {
  const pasta = path.join(__dirname, `../content/${template}`);
  if (!fs.existsSync(pasta)) fs.mkdirSync(pasta, { recursive: true });

  for (let i = 1; i <= 1000; i++) {
    const conteudo = {
      numero: i,
      conteudo: faker.lorem.paragraph() + ` (Página ${i})`
    };
    fs.writeFileSync(path.join(pasta, `${i}.json`), JSON.stringify(conteudo, null, 2));
  }
}

gerarPaginas('paginatemplate1');
gerarPaginas('paginatemplate2');

console.log('Arquivos gerados com sucesso!');
