const jwt=require('jsonwebtoken');
const pool=require('../Connection/db');
const bcrypt=require('bcrypt');


exports.login=async(req, res)=>{
    try {
        const {email, password}=req.body;

        const user=await authenticate(email, password);

        if(user.error){
            return res.status(401).json({error: user.error});
        }

        const token=jwt.sign({user:user}, process.env.SECRET);

        res.json({token});
    } catch (error) {
        console.error('LOGIN ERROR', error);
        res.status(500).json({error: 'Internal server error'});
    }
};

async function authenticate(email, password){
    try {
        const result=await pool.query("SELECT * FROM users WHERE email=? ", [email]);

        const user=result[0];

        if(!user || user.length===0){
            return {error: "EMAIL DOES NOT EXIST"};
        }

        const userData=user[0];

        const hashedPassword=userData.password;
        const passwordMatch=await bcrypt.compare(password, hashedPassword);

        if(passwordMatch){
            return userData;
        }
        else{
            return {error: "Password mismatch"};

        }
    } catch (error) {
        throw new Error ('Authentication error: ' + error.message);
    }
}

exports.register=async(req, res)=>{
    try {
        const {firstName, lastName, email, password}=req.body;

        const hashedPassword=await bcrypt.hash(password, 10);

        const connection=await pool.getConnection();

        try {
            await connection.query("INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)", [firstName, lastName, email, hashedPassword]);
            connection.release();
            res.status(201).json({firstName, lastName, email});
        } catch (error) {
            connection.release();
            throw error;
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}