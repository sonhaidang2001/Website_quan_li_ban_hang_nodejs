const express = require('express');
const router = express.Router();

const customService = require('../services/custom.service');
const customController = require('../controllers/custom.controller');

// api 

router.get('/del-custom/:id', customService.delCustom);
router.post('/add-customer', customService.addCustomer);
router.get('/add-custom', customService.addCustom);
router.get('/', customService.custom);

router.route('/api/customs')
    .post(customController.create)
    .get(customController.findAll)
    .delete(customController.deleteAll)
router.route('/api/customs/:id')
    .get(customController.findOne)
    .put(customController.update)
    .delete(customController.delete);


module.exports = router;