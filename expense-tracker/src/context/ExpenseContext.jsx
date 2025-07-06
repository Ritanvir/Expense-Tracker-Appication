import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/expenses")
      .then(res => setExpenses(res.data))
      .catch(err => console.error("Error fetching:", err));
  }, []);

  const addExpense = async (expense) => {
    const res = await axios.post("http://localhost:5000/api/expenses", expense);
    setExpenses([...expenses, res.data]);
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    setExpenses(expenses.filter(e => e._id !== id));
  };

  const updateExpense = async (id, updated) => {
    const res = await axios.put(`http://localhost:5000/api/expenses/${id}`, updated);
    setExpenses(expenses.map(e => (e._id === id ? res.data : e)));
    setEditing(null);
  };

  return (
    <ExpenseContext.Provider value={{
      expenses, addExpense, deleteExpense, updateExpense, editing, setEditing
    }}>
      {children}
    </ExpenseContext.Provider>
  );
};
