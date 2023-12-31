const { saleService } = require('../services');
const errorMap = require('../utils/errorMap');

// const createSale = async (req, res) => {
//   const product = req.body;
//   const { type, message } = await saleService.createSale(product);

//   if (type) return res.status(errorMap.mapError(type)).json(message);

//   return res.status(201).json(message);
// };

const findAll = async (req, res) => {
  const { type, message } = await saleService.findAll();
  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.findSaleById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await saleService.remove(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(204).end();
};

module.exports = {
  // createSale,
  findAll,
  findSaleById,
  remove,
};