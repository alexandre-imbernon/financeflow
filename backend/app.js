const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const transactionRoutes = require('../backend/routes/TransactionRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/transactions', transactionRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
