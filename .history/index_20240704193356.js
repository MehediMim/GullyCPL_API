const express = require("express");
const cors= require("cors");
const app = express();  //Express Object

//Middleware
app.use(cors());
app.use(express.json());


app.listen(5000,()=>{
    console.log("Server Started at 5000");
})