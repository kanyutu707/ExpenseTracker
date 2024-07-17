const express=require('express');
const user=require('./Routes/Authentication');
const finance=require('./Routes/Finances');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const app=express();

const corsOptions={
    origin:true,
    credentials:true,
};

app.use(cors(corsOptions));
app.use(express.json());

const  tokenVerification=(req, res, next)=>{
    if(
        req.path==='/login' ||
        req.path==='/register'
    ){
        return next();
    }

    const token=req.headers['authorization'];
    if(!token){
        return res.status(401).json({message: 'Unauthorized: Token not provided'});

    }
    jwt.verify(token, process.env.SECRET, (err, decoded)=>{
        if(err){
            return res.status(403).json({message: 'Forbidden Invalid token'});
        }
        req.user=decoded;
        next();
    });
};

app.use(tokenVerification);

app.use('', user);
app.use('/finances', finance);

const PORT=process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});