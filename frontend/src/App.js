import React from "react";
import AddTransaction from "./components/AddTransaction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion des Transactions</h1>
        <AddTransaction />
      </header>
    </div>
  );
}

export default App;
