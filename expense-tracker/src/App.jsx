// src/App.jsx
import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Expense Tracker</h1>
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default App;

