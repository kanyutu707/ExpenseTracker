const pool=require('../Connection/db');

exports.createFinance=async(req, res)=>{
    try {
        const{title, description, amount, user_id}=req.body;
        const connection=await pool.getConnection();
        try {
            const [result]=await connection.query("INSERT INTO finances (title, description, amount, user_id) VALUES (?, ?, ?, ?)", [title, description, amount, user_id]);
            const id=result.insertId;
            connection.release();
            res.status(201).json({id, title, description, amount});
        } catch (error) {
            connection.release();
            throw error;
        }
    } catch (error) {
        res.status(500).json({error:error.message});   
    }
}

exports.getAllFinances=async(req, res)=>{
    try {
        const connection=await pool.getConnection();
        try {
            const [finances]=await connection.query("SELECT * FROM finances");
            connection.release();
            res.json(finances);
        } catch (error) {
            connection.release();
            throw error;
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.getFinancesById=async(req, res)=>{
    const connection=await pool.getConnection();
    try {
        const[id]=req.params;
        const[finance]=await connection.query("SELECT * FROM finances WHERE id=?", [id]);
        connection.release();
        if(!finance.length){
            return res.status(404).json({error: "Finance not found"});
        }

        res.json(finance[0]);
        
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

exports.updateFinance=async(req, res)=>{
    try {
        const {id}=req.params;
        const{title, description, amount}=req.body;
        const connection=await pool.getConnection();
        try {
            await connection.query("UPDATE finances SET title=?, description=?, amount=? WHERE id=?", [title, description, amount, id]);
            connection.release();
            res.json({id, title, description, amount});
        } catch (error) {
            connection.release();
            throw error;
        }
    } catch (error) {
        res.status(500).json({error:error.message});   
    }
}

exports.deleteFinance=async(req, res)=>{
    try{
        const{id}=req.params;
        const connection=await pool.getConnection();
        try {
            await connection.query("DELETE FROM finances WHERE id=?", [id]);
            connection.release();
            res.json({message: "Finance deleted successfully"});
        } catch (error) {
            connection.release();
            throw error;
        }
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}