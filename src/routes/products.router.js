const express = require('express');
const { productsController } = require('../controllers');
const { validateName } = require('../middlewares/validateProduct');

const router = express.Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProductById);
router.post('/', validateName, productsController.createProduct);
router.put('/:id', validateName, productsController.updateById);

module.exports = router;
