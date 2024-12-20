<?php
require_once '../../app/Controllers/SubcategoryController.php';  // Inclure le contrôleur

if (isset($_GET['id_category'])) {
    $id_category = (int)$_GET['id_category'];
    $subcategoryController = new SubcategoryController();
    $subcategoryController->getSubcategories($id_category);
} else {
    echo json_encode(["error" => "ID de catégorie non spécifié"]);
}
