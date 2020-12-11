const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();





router.get('/',(_req,res)=>{
    res.sendFile(path.join(process.cwd ()+'/public/index.html'));
    
  });



  module.exports = router;