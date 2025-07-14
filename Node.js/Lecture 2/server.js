const http = require("http")
const server = http.createServer((req, res)=>{
    if(req.url === "/" && req.method === "GET"){
        res.end("home route")
