const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

// const addProductSchema = Joi.object({
  
// });

module.exports = {
  idSchema,
};