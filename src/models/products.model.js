const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findById = async (productId) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return camelize(product);
};

// const insert = async (product) => {
//   const columns = Object.keys(snakeize(product)).join(', ');
//   const placeholders = Object.keys(product).map((_el) => ('?')).join(', ');

//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO StoreManager.products (${columns}) VALUES (${placeholders})`,
//     [...Object.values(product)],
//   );
//   return insertId;
// };

module.exports = {
  findAll,
  findById,
  // insert,
};