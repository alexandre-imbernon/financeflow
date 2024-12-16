import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./TransactionsPage.css";

function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const [filters, setFilters] = useState({
        category: "",
        subCategory: "",
        date: "",
    });

    useEffect(() => {
        const savedTransactions = localStorage.getItem("transactions");
        if (savedTransactions) {
            setTransactions(JSON.parse(savedTransactions));
        }
    }, []);

    const calculateBalance = () =>
        transactions.reduce(
            (total, transaction) =>
                total + (transaction.category === "Revenu" ? parseFloat(transaction.amount) : -parseFloat(transaction.amount)),
            0
        );

    const filteredTransactions = transactions.filter((transaction) => {
        return (
            (!filters.category || transaction.category === filters.category) &&
            (!filters.subCategory || transaction.subCategory === filters.subCategory) &&
            (!filters.date || transaction.date === filters.date)
        );
    });

    return (
        <div className="container-fluid">
            {/* Section de la carte avec le solde */}
            <section className="card-section">
                <div className="card-info">
                <img  src="logoFinance.png" alt="Logo" className="card-logo-left" />
                    <h2 className="text-light">Cards</h2>
                    <div className="card-detail">
                        <h3 className="balance">{calculateBalance().toFixed(2)} €</h3>
                    </div>
                    <img src="carte.png" alt="Card logo" className="card-logo" />
                </div>
            </section>
            {/* Liste des transactions */}
            <section className="transactions-section">
                <h2>Détails</h2> 
                {filteredTransactions.length > 0 ? (
                    <ul className="transaction-list">
                        {filteredTransactions.map((transaction, index) => (
                            <li 
                                key={index}
                                className={`transaction-item ${
                                    transaction.category === "Revenu" ? "income" : "expense"
                                }`}
                            >
                                {/* Ajout de l'icône de flèche */}
                                <span className="transaction-icon">
                                    {transaction.category === "Revenu" ? (
                                        <i className="fas fa-arrow-up" style={{ color: "#28a745" }}></i>
                                    ) : (
                                        <i className="fas fa-arrow-down" style={{ color: "#dc3545" }}></i>
                                    )}
                                </span>
                                        
                                {/* Affichage des détails de la transaction */}
                                <p className="transaction-details">
                                    {transaction.category === "Revenu" ? "+" : "-"} {parseFloat(transaction.amount).toFixed(2)} € - {transaction.title}
                                </p>
                                <p className="transaction-date">{transaction.date}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucune transaction disponible.</p>
                )}
            </section>
        </div>
    );
}

export default TransactionsPage;





