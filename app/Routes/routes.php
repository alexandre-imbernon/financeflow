<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Si la méthode est OPTIONS, terminer la requête ici
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
?>

// Exemple de route pour récupérer toutes les transactions
if ($_SERVER['REQUEST_URI'] === '/api/get_transactions' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    require_once '../Controllers/TransactionController.php';
    $transactionController = new TransactionController();
    $transactionController->getAllTransactions();
}

// Exemple de route pour créer une nouvelle transaction
if ($_SERVER['REQUEST_URI'] === '/api/create_transaction' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once '../Controllers/TransactionController.php';
    $transactionController = new TransactionController();
    // Récupérer les données de la transaction envoyées via POST
    $data = json_decode(file_get_contents("php://input"), true);
    $transactionController->createTransaction($data);
}

// Route pour récupérer les catégories
if ($_SERVER['REQUEST_URI'] === '/api/get_categories' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    require_once '../Controllers/CategoryController.php';
    $categoryController = new CategoryController();
    $categoryController->getCategories();
}

// Route pour récupérer les sous-catégories pour une catégorie donnée
if (preg_match('/^\/api\/get_subcategories\/(\d+)$/', $_SERVER['REQUEST_URI'], $matches) && $_SERVER['REQUEST_METHOD'] === 'GET') {
    require_once '../Controllers/CategoryController.php';
    $categoryController = new CategoryController();
    $categoryController->getSubcategories($matches[1]);  // Passe l'id de la catégorie en paramètre
}
