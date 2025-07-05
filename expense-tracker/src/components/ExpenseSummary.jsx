import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseSummary = () => {
  const { expenses } = useContext(ExpenseContext);

  const total = expenses.reduce((acc, e) => acc + e.amount, 0);
  const highest = expenses.reduce((max, e) => (e.amount > max.amount ? e : max), { amount: 0 });
  const byCategory = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  return (
    <div className="bg-white p-4 shadow rounded mb-4">
      <div><strong>Total Expenses:</strong> ৳{total}</div>
      <div><strong>Highest:</strong> {highest.title || "-"} (৳{highest.amount})</div>
      <div><strong>By Category:</strong>
        <ul>
          {Object.entries(byCategory).map(([cat, val]) => (
            <li key={cat}>{cat}: ৳{val}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseSummary;
