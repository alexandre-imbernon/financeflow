<?php
class Category {

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

    // Récupérer toutes les catégories
    public function getCategories() {
        $stmt = $this->pdo->query("SELECT * FROM category");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Récupérer les sous-catégories pour une catégorie spécifique
    public function getSubcategories($idCategory) {
        $stmt = $this->pdo->prepare("SELECT * FROM subcategory WHERE id_category = :id_category");
        $stmt->bindParam(':id_category', $idCategory, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
