const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Get expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ... POST, DELETE, and PUT routes for expenses

module.exports = router;
