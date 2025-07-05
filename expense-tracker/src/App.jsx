import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import Filter from "./components/Filter";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Expense Tracker</h1>
        <ExpenseForm />
        <Filter />
        <ExpenseSummary />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default App;
