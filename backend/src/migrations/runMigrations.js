import fs from 'fs';
import pool from '../database/connectionDatabase.js';

async function runMigrations() {
  try {
    const sql = fs
      .readFileSync('./src/migrations/001_create_products.sql')
      .toString();

    await pool.query(sql);

    console.log('✅ Migration rodada com sucesso');
  } catch (err) {
    console.error('Erro migration:', err);
  } finally {
    process.exit();
  }
}

runMigrations();
