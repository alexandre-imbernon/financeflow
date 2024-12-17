import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import "./loginForm.css";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        console.log("Email:", email);
        console.log("Mot de passe:", password);

        alert("Connexion réussie !");
        navigate("/transactions");
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
            <img src="/logoFinance.png" alt="Logo" className="login-logo" />
            <h2>FinanceFlow</h2>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <div className="input-container">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Entrez votre email"
                            required
                        />
                        <i className="fas fa-envelope icon"></i> {/* Icône pour l'email */}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Entrez votre mot de passe"
                            required
                        />
                        <i className="fas fa-lock icon"></i> {/* Icône pour le mot de passe */}
                    </div>
                </div>

                <div > Vous n'avez pas de compte ? Inscription </div>
                <br></br>
                <button type="submit" className="btn btn-primary w-100">
                    Se connecter
                </button>
            </form>
        </div>
    );
}

export default LoginForm;
