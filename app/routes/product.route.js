const express = require('express');
const router = express.Router();

const productService = require('../services/product.service');
const productController = require('../controllers/product.controller');

// api 

// router.get('/del-custom/:id', customService.delCustom);
router.post('/add-productShow', productService.addProductShow);
router.get('/add-product', productService.addProduct);
router.get('/', productService.product);

router.route('/api/product')
    .post(productController.create)
    .get(productController.findAll)
    .delete(productController.deleteAll)
router.route('/api/product/:id')
    .get(productController.findOne)
    .put(productController.update)
    .delete(productController.delete);


module.exports = router;