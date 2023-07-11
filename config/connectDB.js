const mongoose = require('mongoose');
const colors = require('colors');



const connectDB= async ()=>{
    try{
await mongoose.connect(process.env.MONGODBURL)
console.log(`Database running on ${mongoose.connection.host}`.bgBlue.white)
    }catch(error){
        console.log(`${error}`.bgRed)
    }
}

module.exports = connectDB;