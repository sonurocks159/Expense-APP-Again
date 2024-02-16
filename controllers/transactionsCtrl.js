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
const editTransaction = async(req,res)=>{
    try{
   
    
      await transactionModel.findOneAndUpdate({_id:req.body.transactionId}, req.body.payload );
      res.status(200).send("Edited successfully")
       }catch(error){
        console.log(error)
        res.status(500).json(error)
    }

}
const deleteTransaction = async(req,res)=>{
    try{
   
    
      await transactionModel.findOneAndDelete({_id:req.body.transactionId})
      res.status(200).send("Deleted successfully")
       }catch(error){
        console.log(error)
        res.status(500).json(error)
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

module.exports = { getAllTransaction, addTransaction, editTransaction, deleteTransaction };