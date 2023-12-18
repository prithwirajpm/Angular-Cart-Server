const mongoose = require('mongoose')
const connection_string=process.env.DB_CNNECTION_STRING
 mongoose.connect(connection_string).then(()=>{
    console.log("mongodb is connected ");
 }).catch((err)=>{
    console.log(err);
 })