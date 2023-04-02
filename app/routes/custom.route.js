const express = require('express');
const router = express.Router();

const customService = require('../services/custom.service');
const customController = require('../controllers/custom.controller');

// api 

router.post('/update-custom/:id', customService.updateCustom);
router.get('/edit-custom/:id', customService.editCustom);
router.get('/del-custom/:id', customService.delCustom);
router.post('/add-customShow', customService.addCustomShow);
router.get('/add-custom', customService.addCustom);
router.get('/', customService.custom);

router.route('/api/custom')
    .post(customController.create)
    .get(customController.findAll)
    .delete(customController.deleteAll)
router.route('/api/custom/:id')
    .get(customController.findOne)
    .put(customController.update)
    .delete(customController.delete);


module.exports = router;