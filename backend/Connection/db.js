const Sequelize=require('sequelize');
const mysql=require('mysql2/promise');
const dotenv=require('dotenv');

dotenv.config()

const pool=mysql.createPool({
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    host:process.env.DB_HOST,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

async function checkPoolConnection(){
    try {
        const connection=await pool.getConnection();
        console.log("Connection established");
        connection.release();
    } catch (error) {
       console.error("Database connection error: ", error); 
    }
}

checkPoolConnection();

module.exports=pool;