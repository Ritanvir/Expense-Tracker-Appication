import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, deleteExpense, filters } = useContext(ExpenseContext);

  const filtered = expenses.filter((expense) => {
    const matchesCategory = filters.category ? expense.category === filters.category : true;
    const [start, end] = filters.dateRange;
    const expenseDate = new Date(expense.date);
    const matchesDate = (!start || expenseDate >= start) && (!end || expenseDate <= end);
    return matchesCategory && matchesDate;
  });

  return (
    <div className="grid gap-2">
      {filtered.map((expense) => (
        <div key={expense._id} className="bg-gray-100 p-3 flex justify-between items-center rounded shadow">
          <div>
            <div><strong>{expense.title}</strong> - ৳{expense.amount}</div>
            <div>{new Date(expense.date).toLocaleDateString("en-GB")}</div>
            <div>{expense.category}</div>
          </div>
          <button onClick={() => deleteExpense(expense._id)} className="text-red-500">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
