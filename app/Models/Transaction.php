<?php

require_once __DIR__ . '/../../config/database.php';

class Transaction {
    public static function addTransaction($data) {
        $db = Database::connect();
        $query = "INSERT INTO transaction (amount, date, title, description, place, id_user, id_category, id_subcategory) 
                  VALUES (:amount, :date, :title, :description, :place, :id_user, :id_category, :id_subcategory)";
        $stmt = $db->prepare($query);

        $stmt->bindParam(':amount', $data['amount']);
        $stmt->bindParam(':date', $data['date']);
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':description', $data['description']);
        $stmt->bindParam(':place', $data['place']);
        $stmt->bindParam(':id_user', $data['id_user']);
        $stmt->bindParam(':id_category', $data['id_category']);
        $stmt->bindParam(':id_subcategory', $data['id_subcategory']);

        return $stmt->execute();
    }
}
