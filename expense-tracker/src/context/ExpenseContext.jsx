import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [filters, setFilters] = useState({ category: "", dateRange: [null, null] });

  // Fetch from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/expenses")
      .then(res => setExpenses(res.data))
      .catch(err => console.error("Error fetching expenses:", err));
  }, []);

  // Add new expense
  const addExpense = async (expense) => {
    try {
      const res = await axios.post("http://localhost:5000/api/expenses", expense);
      setExpenses(prev => [...prev, res.data]);
    } catch (err) {
      console.error("Add expense error:", err);
    }
  };

  // Delete expense
  const deleteExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${id}`);
      setExpenses(prev => prev.filter(e => e._id !== id));
    } catch (err) {
      console.error("Delete expense error:", err);
    }
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, filters, setFilters }}>
      {children}
    </ExpenseContext.Provider>
  );
};
