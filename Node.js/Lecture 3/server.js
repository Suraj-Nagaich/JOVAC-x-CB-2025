const express = require("express")
const app = express()
app.get("/", (req , res)=>{
     console.log("yaha requist aai");
    res.send("Home route")
})

app.post("/", (req, res)=>{
    res.send("home post route")
})

app.get("/about", (req, res)=>{
    res.send("about page")
})

app.get('*', function(req, res) {
    res.send("hello")
})

const PORT = 4000


app.listen(PORT,function() {
    console.log("server started on post : ",PORT);
})
