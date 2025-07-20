const app = require("./src/app")
const connect = require("./src/db/db")
const PORT = 3000


app.listen(PORT , ()=>{
    console.log("server is runnig on port : ", PORT);
    connect()
})
