const app = require("./src/app")
const connect = require("./src/db/db")
const PORT = 3000
app.listen(PORT , ()=>{
    console.log("SERVER IS RUNING  ON PORT NO : ", PORT);
    connect()
})

