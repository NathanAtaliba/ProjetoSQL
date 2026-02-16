import pool from '../database/connectionDatabase.js';

async function findAll() {
    try{
      const result = await pool.query('SELECT * FROM produtos');
      return result.rows;
    }catch(err){
      return err;
}
}
export default {
  findAll,
};
