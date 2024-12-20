<?php

require_once __DIR__ . '/../Models/Transaction.php';

class TransactionController {
    public function addTransaction() {
        $data = json_decode(file_get_contents('php://input'), true);

        if (
            isset($data['amount'], $data['date'], $data['title'], $data['id_user'], $data['id_category'], $data['id_subcategory'])
        ) {
            $result = Transaction::addTransaction($data);
            if ($result) {
                echo json_encode(["success" => true, "message" => "Transaction added successfully"]);
            } else {
                echo json_encode(["success" => false, "message" => "Error while adding the transaction"]);
            }
        } else {
            echo json_encode(["success" => false, "message" => "Missing required fields"]);
        }
    }
}
