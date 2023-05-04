const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');
const userController = require('../controllers/user.controller');


// service
router.post('/edit/:id', userService.update);
router.get('/edit', userService.edit);
router.get('/home', userService.home);
router.post('/login-check', userService.loginCheck);
router.get('/', userService.login);


// api 
router.route('/api/user')
    .post(userController.create)
    .get(userController.findAll)
router.route('/api/user/:id')
    .get(userController.findOne)
    .put(userController.update)

module.exports = router;