const { salesModel } = require('../models');

const findById = async (id) => {
  const sale = await salesModel.findById(id);
  return sale;
};

const createSaleProduct = async (product) => {
  const saleId = await salesModel.createSaleProduct(product);
  return saleId;
};

const createSale = async (product) => {
  const id = await createSaleProduct(product);
  const sale = await findById(id);
  return {
    type: null,
    message: {
      id,
      itemSold: sale.map((el) => ({
        productId: el.productId,
        quantity: el.quantity,
      })),
    },
  };
};

module.exports = {
  findById,
  createSale,
};