const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/expense_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema (structure of expense)
const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: Date,
  category: String,
});

// Model (for DB operations)
const Expense = mongoose.model('Expense', expenseSchema);

// ======= ROUTES =======

// Get all expenses
app.get('/api/expenses', async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// Add a new expense
app.post('/api/expenses', async (req, res) => {
  const newExpense = new Expense(req.body);
  await newExpense.save();
  res.status(201).json(newExpense);
});

// Delete an expense
app.delete('/api/expenses/:id', async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
