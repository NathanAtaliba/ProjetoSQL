import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
user: `${process.env.DB_USER}`,
host: `${process.env.DB_HOST}`,
database: `${process.env.DB_NAME}`,
password: `${process.env.DB_PASSWORD}`,
port: `${process.env.DB_PORT}`,
})

async function createDatabase() {
  try {
    await client.connect();
    const dbName = 'meu_banco';
    const result = await client.query(`SELECT 1 FROM pg_database WHERE datname='${dbName}'`);

    if (result.rowCount === 0) {
      await client.query(`CREATE DATABASE ${dbName}`);
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
