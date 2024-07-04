const Pool = require("pg").Pool;

const pool =new Pool (
    {
        user:"postgres",
        password:"mim",
        host:"localhost",port:5432,
        database:"GULLYCPL"
    }
)

module.exports = pool;