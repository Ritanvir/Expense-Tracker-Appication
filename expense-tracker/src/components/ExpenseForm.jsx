import React, { useContext, useState, useEffect } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense, editing, updateExpense } = useContext(ExpenseContext);
  const [form, setForm] = useState({ title: "", amount: "", category: "", date: "" });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const { title, amount, category, date } = form;
    if (!title || !amount || !category || !date) {
      return alert("All fields are required.");
    }

    if (editing) updateExpense(editing._id, form);
    else addExpense(form);

    setForm({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mb-4 bg-white p-4 rounded shadow">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="amount" type="number" placeholder="Amount" value={form.amount} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">{editing ? "Update" : "Add"} Expense</button>
    </form>
  );
};

export default ExpenseForm;
