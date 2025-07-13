 var figlet = require("figlet");
const fs = require('fs')


figlet("Suraj", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});



  readFile
fs.readFile("math.txt","utf8",(err, data)=>{
    if(err){
        console.log("error found in your code :",err);
        
    }
    console.log(data);
    
})


writeFile

fs.writeFile("text.txt","Suraj Nagaich",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file was created successfully");
    }
})




update 
fs.appendFile("text.txt","Suraj",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file was updated successfully");
    }
})

delete file
fs.unlink("math.txt",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file deleted successfully");
    
})


remane
fs.rename("app.js","server.js",(err)=>{
    if(err){
        console.log(err);
        
    }
    console.log("yes file ka name change ho gya");
    
})


create folder
fs.mkdir("newFolder",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("folder created");
    
})


READ FOLDER
fs.readdir("huhuhu",(err,file)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("folder read :", file);
    
})

fs.rmdir("newFolder",{ recursive : true },(err)=>{
    if(err){
        console.log("folder path not found :",err);
    }else{
        console.log("folder deleted successfully"); 
    }
})
