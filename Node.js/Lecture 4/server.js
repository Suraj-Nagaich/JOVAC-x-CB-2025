const app = require("./src/app")
const connect = require("./src/database/db")
let PORT = 3000
app.listen(PORT , ()=>{
    console.log(`server started on port no. ${PORT}`);
    connect()
})
