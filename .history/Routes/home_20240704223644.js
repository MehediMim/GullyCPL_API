const  express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/",async(req,res)=>{
    try {
        const {player_name,player_category}= req.body;
        // console.log(player_name);
        // console.log(player_category);
        const newPlayer = await pool.query("INSERT INTO players (player_name,player_category) VALUES($1,$2)",
        [player_name,player_category]);
        res.json(newPlayer);
        console.log(res);
    } catch (error) {
        console.error(error.message);
    }
})

router.get("/",async(req,res)=>{
    try {
        const allPlayer = await pool.query("SELECT * FROM players");
        console.log(allPlayer.rows);
    } catch (error) {
        console.error(error.message);
    }
})

module.exports = router;