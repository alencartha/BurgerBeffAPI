const { Router } = require('express');
const ordersController = require('../controller/authController');

const router = Router();

router.post('/', authController.postLogin);

module.exports = router;
