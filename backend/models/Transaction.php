<?php
class Transaction {

    private $pdo;

    public function __construct() {
        // Connexion à la base de données
        $host = 'localhost';
        $dbname = 'financeflow';
        $username = 'root';
        $password = '';
        $this->pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    // Récupérer toutes les transactions
    public function getAllTransactions() {
        $stmt = $this->pdo->query("SELECT * FROM transaction");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Créer une nouvelle transaction
    public function createTransaction($data) {
        $stmt = $this->pdo->prepare(
            "INSERT INTO transaction (amount, date, title, description, place, id_user, id_category, id_subcategory) 
             VALUES (:amount, :date, :title, :description, :place, :id_user, :id_category, :id_subcategory)"
        );
        
        // Bind des paramètres
        $stmt->bindParam(':amount', $data['amount']);
        $stmt->bindParam(':date', $data['date']);
        $stmt->bindParam(':title', $data['title']);
        $stmt->bindParam(':description', $data['description']);
        $stmt->bindParam(':place', $data['place']);
        $stmt->bindParam(':id_user', $data['id_user']);
        $stmt->bindParam(':id_category', $data['id_category']);
        $stmt->bindParam(':id_subcategory', $data['id_subcategory']);
        
        // Exécution de la requête
        $stmt->execute();
        return $this->pdo->lastInsertId();  // Retourne l'ID de la transaction insérée
    }
}
