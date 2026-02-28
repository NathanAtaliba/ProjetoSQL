import pool from '../database/connectionDatabase.js';

async function findAll() {
    try{
      const result = await pool.query('SELECT * FROM produtos');
      return result.rows;
    }catch(err){
      return err;
}
}
async function findOne(PR) {
    try{
      const result = await pool.query(`SELECT * FROM produtos WHERE PR = ${PR}`);
      return result.rows;
    }catch(err){
      return err;
}
}
async function createOne(pr, ano, modelo, problema) {
    try{
      const result = await pool.query(`INSERT INTO produtos (pr, ano, modelo, problema)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [pr, ano, modelo, problema]);
      if (result.rows.length === 0) {
      throw new Error("Produto não foi criado");
    }
    return result.rows[0];
  } catch (err) {
    throw err;
  }
}
async function findOneUpdate(pr, ano, modelo, novoProblema) {
    try{
      const result = await pool.query(`UPDATE produtos SET problema = $4 WHERE pr = $1 AND ano = $2 AND modelo = $3 
        RETURNING *`,
        [pr, ano, modelo, novoProblema]);
      if (result.rows.length === 0) {
        throw new Error("Produto não encontrado");
      }
    return result.rows[0];
  } catch (err) {
    throw err;
  }
}
async function findOneDelete(pr, ano, modelo) {
    try{
      const result = await pool.query(`DELETE FROM produtos WHERE pr = $1 AND ano = $2 AND modelo = $3
RETURNING *`,[pr, ano, modelo]);
 if (result.rows.length === 0) {
      throw new Error("Produto não encontrado");
    }
   return result.rows[0];
  } catch (err) {
    throw err;
  }
}

export default {
  findAll,
  findOne,
  createOne,
  findOneUpdate,
  findOneDelete,
};
