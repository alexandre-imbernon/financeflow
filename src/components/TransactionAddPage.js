import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Importer useNavigate
import "bootstrap/dist/css/bootstrap.min.css";

function TransactionAddPage({ onAddTransaction }) {
    const [transaction, setTransaction] = useState({
        date: "",
        place: "",
        title: "",
        description: "",
        category: "",
        subCategory: "",
        amount: "",
    });

    const navigate = useNavigate();  // Utilisation du hook useNavigate pour la redirection

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!transaction.title || !transaction.amount || !transaction.category) {
            alert("Veuillez remplir les champs obligatoires.");
            return;
        }
        onAddTransaction(transaction);  // Ajouter la transaction
        setTransaction({
            date: "",
            place: "",
            title: "",
            description: "",
            category: "",
            subCategory: "",
            amount: "",
        });
        
        // Rediriger l'utilisateur vers la page d'accueil après l'ajout
        navigate("/");  // Redirection vers la page d'accueil
    };

    return (
        <div className="container py-4">
            <h2>Ajouter une nouvelle transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="row g-3">
                    <div className="col-md-4">
                        <input
                            type="date"
                            value={transaction.date}
                            onChange={(e) => setTransaction({ ...transaction, date: e.target.value })}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            value={transaction.place}
                            onChange={(e) => setTransaction({ ...transaction, place: e.target.value })}
                            className="form-control"
                            placeholder="Lieu"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            value={transaction.title}
                            onChange={(e) => setTransaction({ ...transaction, title: e.target.value })}
                            className="form-control"
                            placeholder="Titre"
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <textarea
                            value={transaction.description}
                            onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
                            className="form-control"
                            placeholder="Description (facultatif)"
                            rows="2"
                        />
                    </div>
                    <div className="col-md-3">
                        <select
                            value={transaction.category}
                            onChange={(e) => setTransaction({ ...transaction, category: e.target.value })}
                            className="form-select"
                            required
                        >
                            <option value="">Catégorie</option>
                            <option value="Revenu">Revenu</option>
                            <option value="Dépense">Dépense</option>
                        </select>
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            value={transaction.subCategory}
                            onChange={(e) => setTransaction({ ...transaction, subCategory: e.target.value })}
                            className="form-control"
                            placeholder="Sous-catégorie"
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="number"
                            value={transaction.amount}
                            onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
                            className="form-control"
                            placeholder="Montant (€)"
                            required
                        />
                    </div>
                    <div className="col-md-4 d-flex align-items-end">
                        <button type="submit" className="btn btn-success w-100">Ajouter</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default TransactionAddPage;
