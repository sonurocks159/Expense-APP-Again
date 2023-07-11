const express = require('express');
const {addTransaction,getAllTransaction}= require("../controllers/transactionsCtrl")





//router object
const router  = express.Router()

//router

router.post('/add-transaction',addTransaction )

//Get transaction
router.post('/get-transaction', getAllTransaction)

module.exports = router;