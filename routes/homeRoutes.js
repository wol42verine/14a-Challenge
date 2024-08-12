const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/dashboard', homeController.getDashboardPage);

module.exports = router;