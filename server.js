const express = require('express');
const app = express();
// const path = require('path');
const router = express.Router();

// const logger = (req, res, next) => {          
//   let d=new Date();                           
//   let j=d.getDay();
//   let h=d.getHours();
//   if((h<=17 && h>=9) && (j>=1 && j<=5)){
//     let url = req.replace('/', "")
//     if (!url){                                  // MAFHEMTECH, KIFECH NA3MIL EL VERIFICATION MTA3 EL WA9T
//       res.render('home')                       
//     }else{
//       res.render(url)
//     }
//   }else {
//     res.render('not available at this time')
//   }
//   next();
// }
//app.use(logger)

app.use(express.static(__dirname + '/public'))



app.use('/', require('./routes/Home'));
app.use('/', require('./routes/ourServices'));
app.use('/', require('./routes/contactUs'));

app.listen(5000, (err) => {
  if (err) throw err;
  else console.log("server running on port 5000!!!!");
});
