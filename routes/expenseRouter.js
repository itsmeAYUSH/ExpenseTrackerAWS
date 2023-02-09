const express = require("express");
const expenseController = require("../controllers/expenseController");
const router = express.Router();

router.get("/expense", expenseController.getExpenseData);

router.post("/expense", expenseController.postExpenseData);

router.get("/expenses", expenseController.getExpenses);

module.exports = router;