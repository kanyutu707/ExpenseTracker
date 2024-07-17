const express=require('express');
const router=express.Router();
const user=require('../Controller/Authentication');

router.post('/login', user.login);
router.post('/register', user.register);

module.exports=router;