const mongoose = require('mongoose')

mongoose.connection.on("open",()=>{console.log("mongodb connected successfully")});

mongoose.connection.on("error",(err)=>{console.log("mongodb connection failed",err)});

mongoose.connect(process.env.mongooseUrl)

module.exports = {mongoose}