// const camelize = require('camelize');
const connection = require('./connection');

// const createSale = async () => {
//   const [{ insertId }] = await connection.execute(
//     'INSERT INTO StoreManager.sales (date) VALUE (default)',
//   );
//   return insertId;
// };

// const findById = async (saleId) => {
//   const [[sale]] = await connection.execute(
//     'SELECT * FROM StoreManager.sales WHERE id = ?', [saleId],
//   );
//   return camelize(sale);
// };

// const createSaleProduct = async (product) => {
//   const values = product.map((obj) => Object.values(obj)).flat();
//   await connection.execute(
//     'INSERT INTO StoreManager.sales (sale_id, product_id, quantity) VALUES (?, ?, ?)',
//     [values],
//   );
//   const saleId = await createSale();
//   return saleId;
// };

const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT sales.id AS saleId, sales.date, salesp.product_id AS productId, salesp.quantity
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS salesp
    ON salesp.sale_id = sales.id`,
  );
  return result;
};

const findSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sales.date, salesp.product_id AS productId, salesp.quantity
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS salesp
    ON salesp.sale_id = sales.id
    WHERE sales.id = ?`,
    [id],
  );
  return result;
};

module.exports = {
  // createSale,
  // findById,
  // createSaleProduct,
  findAll,
  findSaleById,
};