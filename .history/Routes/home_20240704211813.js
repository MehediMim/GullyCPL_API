const  express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/",async(req,res)=>{
    try {
        console.log(req.body);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;