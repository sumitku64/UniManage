var express = require('express');
var router = express.Router();

router.get("/",(req,res,next)=>{
    res.send("responce with resource");
});
module.exports=router;
