const { saleService } = require('../services');
const errorMap = require('../utils/errorMap');

const createSale = async (req, res) => {
  const product = req.body;
  const { type, message } = await saleService.createSale(product);

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(201).json(message);
};

module.exports = {
  createSale,
};
