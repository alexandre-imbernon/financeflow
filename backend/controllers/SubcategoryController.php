<?php
require_once '../Models/Subcategory.php';  // Inclure le modèle

class SubcategoryController {

    public function getSubcategories($id_category) {
        $subcategoryModel = new Subcategory();
        $subcategories = $subcategoryModel->getSubcategoriesByCategory($id_category);
        echo json_encode($subcategories);
    }
}
