const  express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/",async(req,res)=>{
    try {
        const {name}= req.body.player_name;
        const {category}= req.body.player_category;
        console.log(name);
        console.log(category);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;