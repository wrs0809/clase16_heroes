const express = require("express")
const app = express();
const path= require("path")
const port = 3030



app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html")
})
app.get("/babbage",(req,res)=>{
    res.sendFile(__dirname+"/views/babbage.html")
})
app.get("/berners-lee",(req,res)=>{
    res.sendFile(__dirname+"/views/berners-lee.html")
})
app.get("/clarke",(req,res)=>{
    res.sendFile(__dirname+"/views/clarke.html")
})
app.get("/hamilton",(req,res)=>{
    res.sendFile(__dirname+"/views/hamilton.html")
})
app.get("/hopper",(req,res)=>{
    res.sendFile(__dirname+"/views/hopper.html")
})
app.get("/lovelace",(req,res)=>{
    res.sendFile(__dirname+"/views/lovelace.html")
})
app.get("/turing",(req,res)=>{
    res.sendFile(__dirname+"/views/turing.html")
})
app.listen(port,()=>{
console.log("El servidor esta corriendo en el puerto "+ port)
})

app.use(express.static("public"))

/*app.post()
app.put()
app.patch()
app.delete()*/