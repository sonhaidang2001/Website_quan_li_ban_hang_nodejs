const express = require('express');
const router = express.Router();

const productService = require('../services/product.service');
const productController = require('../controllers/product.controller');

// api 

router.post('/update-product/:id', productService.updateProduct);
router.get('/edit-product/:id', productService.editProduct);
router.get('/del-product/:id', productService.delProduct);
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