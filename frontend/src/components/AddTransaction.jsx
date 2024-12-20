import React, { useState, useEffect } from "react";
import axios from "axios";

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    amount: "",
    date: "",
    title: "",
    description: "",
    place: "",
    id_user: "",
    id_category: "",
    id_subcategory: "",
  });

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost/api/get_categories")
      .then(response => {
        console.log("Catégories reçues :", response.data);
        setCategories(response.data);
      })
      .catch(error => console.error("Erreur lors de la récupération des catégories :", error));
  }, []);
  

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData({ ...formData, id_category: selectedCategory });

    // Fetch subcategories based on selected category
    if (selectedCategory) {
      axios.get(`http://localhost/api/get_subcategories/${selectedCategory}`)
        .then(response => {
          setSubcategories(response.data);
        })
        .catch(error => console.error("Error fetching subcategories:", error));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost/api/create_transaction", formData);
      alert(response.data.message);
    } catch (error) {
      alert("Erreur lors de l'ajout de la transaction");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Montant:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
      </label>
      <label>
        Date:
        <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Titre:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Lieu:
        <input type="text" name="place" value={formData.place} onChange={handleChange} />
      </label>
      <label>
        Utilisateur (ID):
        <input type="number" name="id_user" value={formData.id_user} onChange={handleChange} required />
      </label>
      <label>
        Catégorie:
        <select name="id_category" value={formData.id_category} onChange={handleCategoryChange} required>
  <option value="">-- Sélectionner une catégorie --</option> {/* Option par défaut */}
  {categories.map(category => (
    <option key={category.id} value={category.id}>{category.name}</option>
  ))}
</select>

      </label>
      <label>
        Sous-catégorie:
        <select name="id_subcategory" value={formData.id_subcategory} onChange={handleChange} required>
  <option value="">-- Sélectionner une sous-catégorie --</option> {/* Option par défaut */}
  {subcategories.map(subcategory => (
    <option key={subcategory.id} value={subcategory.id}>{subcategory.name}</option>
  ))}
</select>

      </label>
      <button type="submit">Ajouter la transaction</button>
    </form>
  );
};

export default AddTransaction;
