<?php
class Subcategory {

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

    public function getSubcategoriesByCategory($id_category) {
        $stmt = $this->pdo->prepare("SELECT id, name FROM subcategory WHERE id_category = :id_category");
        $stmt->bindParam(':id_category', $id_category, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
