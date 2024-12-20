const TransactionModel = require('../models/TransactionModel');

const TransactionController = {
    getAllTransactions: (req, res) => {
        TransactionModel.getAllTransactions((err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json(results);
        });
    },
    createTransaction: (req, res) => {
        const transaction = req.body;
        TransactionModel.createTransaction(transaction, (err, results) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            res.json({ success: true, id: results.insertId });
        });
    },
};

module.exports = TransactionController;
