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

const createProduct = async (name) => {
  // const columns = Object.keys(snakeize(name)).join(', ');
  // const placeholders = Object.keys(name).map((_el) => ('?')).join(', ');

  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [name],
  );
  return insertId;
};

const updateById = async (id, name) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
    [name, id],
  );
};

const remove = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = (?)',
    [id],
  );
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateById,
  remove,
};