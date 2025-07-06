import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses, deleteExpense, setEditing } = useContext(ExpenseContext);

  return (
    <div className="space-y-2">
      {expenses.map(exp => (
        <div key={exp._id} className="flex justify-between bg-gray-100 p-3 rounded shadow-sm">
          <div>
            <div className="font-semibold">{exp.title} - ৳{exp.amount}</div>
            <div className="text-sm text-gray-500">{exp.category} | {new Date(exp.date).toLocaleDateString()}</div>
          </div>
          <div className="space-x-2">
            <button onClick={() => setEditing(exp)} className="text-yellow-600">Edit</button>
            <button onClick={() => deleteExpense(exp._id)} className="text-red-600">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
