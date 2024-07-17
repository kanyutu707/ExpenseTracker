const express=require('express');
const router=express.Router();
const finances=require('../Controller/Finances');

router.get("/", finances.getAllFinances);
router.post("/", finances.createFinance);
router.get("/:id", finances.getFinancesById);
router.put("/:id", finances.updateFinance);
router.delete("/:id", finances.deleteFinance);

module.exports=router