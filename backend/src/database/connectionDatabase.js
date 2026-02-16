import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME, // aqui usa o banco criado
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// opcional: log de conexão
pool.on('connect', () => {
  console.log('🟢 Conectado ao PostgreSQL');
});

export default pool;
