<?php
require_once '../Models/Transaction.php';  // Inclure le modèle Transaction

class TransactionController {

    // Méthode pour récupérer toutes les transactions
    public function getAllTransactions() {
        $transactionModel = new Transaction();
        $transactions = $transactionModel->getAllTransactions();
        echo json_encode($transactions);  // Retourne les transactions sous format JSON
    }

    // Méthode pour créer une nouvelle transaction
    public function createTransaction($data) {
        $transactionModel = new Transaction();
        $result = $transactionModel->createTransaction($data);
        echo json_encode(["success" => true, "id" => $result]);
    }
}
