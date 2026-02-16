import pkg from 'pg';
const { Client } = pkg;

const dbName = process.env.DB_NAME;

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'postgres', // conecta no banco padrão
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function createDatabase() {
  try {
    await client.connect();

    const result = await client.query(
      "SELECT 1 FROM pg_database WHERE datname = $1",
      [dbName]
    );

    if (result.rowCount === 0) {
      await client.query(`CREATE DATABASE "${dbName}"`);
      console.log(`✅ Banco de dados "${dbName}" criado com sucesso!`);
    } else {
      console.log(`⚠️ O banco "${dbName}" já existe.`);
    }

  } catch (err) {
    console.error('Erro ao criar banco:', err);
  } finally {
    await client.end();
  }
}

export default createDatabase;
