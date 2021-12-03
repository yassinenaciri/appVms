const express = require('express')
const router=express.Router();
const vmController =require('./vmController')


router.post("",vmController.addVm);
router.get("", vmController.getVms);
router.get("/switch/:id",vmController.switchState)

module.exports =router;