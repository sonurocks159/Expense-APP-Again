const mongoose = require('mongoose')
const moment = require('moment')
const transactionModel = require('../models/transactionModel')
const getAllTransaction = async(req,res) => {
    try{
        const {frequency,selectedDate,type}= req.body;
        const allTransactions = await transactionModel.find({
           ...(frequency !== 'custom' ? {
            date:{
                $gt:moment().subtract(Number(frequency),'d').toDate(),
            }
           }:{
            date:{
                $gte:selectedDate[0],
                $lte: selectedDate[1]

            }

           }),

          
            userid:req.body.userid,
            ...(type !=='all' && {type})
        })
        res.status(200).json(allTransactions)

    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

}
const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send('Transaction created')

    } catch (err) {
        console.log(err)
        res.status(500).json(err)

    }

}

module.exports = { getAllTransaction, addTransaction };