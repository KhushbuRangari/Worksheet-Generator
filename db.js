// db.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to Database!'));
    } catch (error) {
        console.log("DB not Connected"+error);
    }
}

module.exports= db;