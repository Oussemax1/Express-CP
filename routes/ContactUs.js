const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();




router.get('/contact',(_req,res)=>{
    res.sendFile(path.join(process.cwd () +'/public/contact.html'));
  });

  

  module.exports = router;