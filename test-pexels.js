require('dotenv').config();
const { createClient } = require('pexels');

const apiKey = process.env.PEXELS_API_KEY;

if (!apiKey) {
  console.error('PEXELS_API_KEY não encontrada no .env');
  process.exit(1);
}

const client = createClient(apiKey);

async function main() {
  try {
    const result = await client.photos.search({ query: 'nature', per_page: 1 });
    console.log('Conexão com Pexels OK!');
    console.log('Total de resultados:', result.total_results);
    if (result.photos && result.photos.length > 0) {
      console.log('Exemplo foto:', result.photos[0].src.medium);
      console.log('Fotógrafo:', result.photos[0].photographer);
    }
  } catch (err) {
    console.error('Erro ao conectar na API Pexels:', err);
    process.exit(1);
  }
}

main();
