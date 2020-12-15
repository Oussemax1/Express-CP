const express = require('express');
const app = express();
// const path = require('path');
const router = express.Router();

app.use(express.static(__dirname+'/public'));

 

const workingTime = (req, res, next) => {

 let openDay = new Date();

 

 if (

   openDay.getHours() > 09 &&

   openDay.getHours() < 17 &&

   openDay.getDay() > 0 &&

   openDay.getDay() < 6

 ) {

   next();

 } else {

   console.log("Our office is closed !!!");

   res.send("<h1> please contact us on working time :) ");

 }

};

 app.get("/", function (req, res) {

   res.sendFile(__dirname + "/public/home.html");

 });

 app.get("/contact", function (req, res) {

   res.sendFile(__dirname + "/public/contact.html");

 });

 app.get("/service", function (req, res) {

   res.send });

app.use(express.static(__dirname + '/public'))



app.use('/', require('./routes/Home'));
app.use('/', require('./routes/ourServices'));
app.use('/', require('./routes/contactUs'));

app.listen(5000, (err) => {
  if (err) throw err;
  else console.log("server running on port 5000!!!!");
});
