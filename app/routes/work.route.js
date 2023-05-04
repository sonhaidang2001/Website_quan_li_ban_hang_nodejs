const express = require('express');
const router = express.Router();

const workService = require('../services/work.service');
const workController = require('../controllers/work.controller');

// service
router.post('/update-work/:id', workService.updateWork);
router.get('/edit-work/:id', workService.editWork);
router.get('/del-work/:id', workService.delWork);
router.post('/add-workNew', workService.addWorkNew);
router.get('/', workService.work);

// api
router.route('/api/work')
    .post(workController.create)
    .get(workController.findAll)
    .delete(workController.deleteAll)
router.route('/api/work/:id')
    .get(workController.findOne)
    .put(workController.update)
    .delete(workController.delete);


module.exports = router;