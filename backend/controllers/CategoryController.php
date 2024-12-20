<?php
require_once '../Models/Category.php';  // Inclure le modèle Category

class CategoryController {

    // Méthode pour récupérer toutes les catégories
    public function getCategories() {
        $categoryModel = new Category();
        $categories = $categoryModel->getCategories();
        echo json_encode($categories);  // Retourne les catégories sous format JSON
    }

    // Méthode pour récupérer les sous-catégories d'une catégorie donnée
    public function getSubcategories($idCategory) {
        $categoryModel = new Category();
        $subcategories = $categoryModel->getSubcategories($idCategory);
        echo json_encode($subcategories);  // Retourne les sous-catégories sous format JSON
    }
}
