import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ExpenseContext } from "../context/ExpenseContext";
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState("");

  const isFormValid = title && amount && date && category;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    addExpense({
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      date: date.toISOString(),
      category,
    });

    setTitle("");
    setAmount("");
    setDate(null);
    setCategory("");
  };

  return (
    <form className="p-4 bg-white shadow rounded mb-4" onSubmit={handleSubmit}>
      <input className="w-full mb-2 p-2 border" placeholder="Expense Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="w-full mb-2 p-2 border" placeholder="Amount (TK)" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <DatePicker className="w-full mb-2 p-2 border" selected={date} onChange={setDate} placeholderText="Select date" dateFormat="dd-MM-yyyy" />
      <select className="w-full mb-2 p-2 border" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option>Food</option>
        <option>Travel</option>
        <option>Entertainment</option>
        <option>Bills</option>
        <option>Others</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50" disabled={!isFormValid}>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
