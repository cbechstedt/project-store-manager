const { productsModel } = require('../models');
const { validateId } = require('./validations/validationsInputValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  return { type: null, message: products };
};

const findById = async (productId) => {
  const error = validateId(productId);
  if (error.type) return error;
  
  const product = await productsModel.findById(productId);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const createProduct = async (name) => {
  const newProductId = await productsModel.createProduct(name);
  const newProduct = await productsModel.findById(newProductId);

  return { type: null, message: newProduct };
};

const updateById = async (id, name) => {
  await productsModel.updateById(id, name);
  const product = await productsModel.findById(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  findAll,
  findById,
  createProduct,
  updateById,
};