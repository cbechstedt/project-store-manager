const express = require('express');
const { salesController } = require('../controllers');

const router = express.Router();

// router.post('/', salesController.createSale);
router.get('/', salesController.findAll);
router.get('/:id', salesController.findSaleById);

module.exports = router;