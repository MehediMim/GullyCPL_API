const  express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/",async(req,res)=>{
    try {
        const {name,category}= req.body;
        console.log(name);
        console.log(category);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;