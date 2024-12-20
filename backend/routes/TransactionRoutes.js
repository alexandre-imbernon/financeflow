const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/TransactionController');

router.get('/', TransactionController.getAllTransactions);
router.post('/', TransactionController.createTransaction);

module.exports = router;
