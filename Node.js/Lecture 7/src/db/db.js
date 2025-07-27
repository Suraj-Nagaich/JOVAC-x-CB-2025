const mongoose = require("mongoose")
const connect = ()=>{
    mongoose.connect("mongodb://localhost:27017/GLA")
    .then(()=>{
        console.log("database connected");       
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports = connect
