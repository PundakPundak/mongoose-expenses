const express = require('express')
const router = express.Router()

const Expense = require('../models/Exspense')

router.get('/people', function (req, res) {
    Expense.find({}, function (err, expenses) {
        res.send(expenses)
    })
})

module.exports = router