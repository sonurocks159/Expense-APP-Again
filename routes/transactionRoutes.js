const express = require('express');
const {addTransaction,getAllTransaction, editTransaction, deleteTransaction}= require("../controllers/transactionsCtrl")





//router object
const router  = express.Router()

//router

router.post('/add-transaction',addTransaction )

router.post('/edit-transaction',editTransaction )

router.post('/delete-transaction',deleteTransaction )

//Get transaction
router.post('/get-transaction', getAllTransaction)

module.exports = router;