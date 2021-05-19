const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user');

Router.post('/send-form', userController.sendForm);

module.exports = Router;
