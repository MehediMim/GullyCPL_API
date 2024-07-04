const  express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/",async(req,res)=>{
    try {
        const {player_name,player_category}= req.body;
        console.log(player_name);
        console.log(player_category);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;