const { salesModel } = require('../models');

// const findById = async (id) => {
//   const sale = await salesModel.findById(id);
//   return sale;
// };

// const createSaleProduct = async (product) => {
//   const saleId = await salesModel.createSaleProduct(product);
//   return saleId;
// };

// const createSale = async (product) => {
//   const id = await createSaleProduct(product);
//   const sale = await findById(id);
//   return {
//     type: null,
//     message: {
//       id,
//       itemSold: sale.map((el) => ({
//         productId: el.productId,
//         quantity: el.quantity,
//       })),
//     },
//   };
// };

const findAll = async () => {
  const result = await salesModel.findAll();
  return { type: null, message: result };
};

const findSaleById = async (id) => {
  const sale = await salesModel.findSaleById(id);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: sale };
};

const remove = async (id) => {
  const sale = await salesModel.findSaleById(id);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  await salesModel.remove(id);

  return { type: null };
};

module.exports = {
  // findById,
  // createSale,
  findAll,
  findSaleById,
  remove,
};