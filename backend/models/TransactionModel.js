const connection = require('../db/connection');

const TransactionModel = {
    getAllTransactions: (callback) => {
        const sql = 'SELECT * FROM transaction';
        connection.query(sql, callback);
    },
    createTransaction: (data, callback) => {
        const sql = 'INSERT INTO transaction SET ?';
        connection.query(sql, data, callback);
    },
};

module.exports = TransactionModel;
