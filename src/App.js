import React, { useState } from "react"; // Importer useState de React
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; // Importer Routes et Link de react-router-dom
import TransactionsPage from ".//components/TransactionsPage";
import TransactionAddPage from ".//components/TransactionAddPage"; // Importer la page d'ajout
import LoginForm from ".//components/loginForm"; // Importer le formulaire de connexion
import "./App.css";


function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
      setTransactions([...transactions, transaction]);
      localStorage.setItem("transactions", JSON.stringify([...transactions, transaction])); // Enregistrer dans le localStorage
  };

  return (
    <Router>
        <div className="App">
            {/* Routes pour les pages */}
            <Routes>
                <Route path="/" element={<TransactionsPage transactions={transactions} />} />
                <Route path="/ajouter" element={<TransactionAddPage onAddTransaction={addTransaction} />} />
                <Route path="/login" element={<LoginForm />} /> {/* Route vers la page de connexion */}

            </Routes>

            {/* Footer avec les liens */}
            <footer className="footer">
                <div className="footer-links">
                    <Link to="/" className="footer-link">Accueil</Link>
                    <Link to="/ajouter" className="footer-link">Ajouter une transaction</Link>
                    <Link to="/login" className="footer-link">Se connecter</Link> {/* Lien vers la page de connexion */}

                </div>
            </footer>
        </div>
    </Router>
);
}

export default App;