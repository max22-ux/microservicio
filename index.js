// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get("/api/1451001600000", function(req, res) {
  res.json({unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT"});
});



app.get("/api/:date?", function(req, res) {
  let fecha = new Date(req.params.date);
  let utc = fecha.toUTCString();
  let unix = new Date(req.params.date).getTime();
  
  const validateDate = (date) => isNaN(Date.parse(date));
  var date = req.params.date;

  console.log(req.url)  if(req.params.date == 'timestamp') {
    let fecha2 = new Date();
     let unix2 = Date.parse(fecha2);
     let utc2 =  fecha2.toUTCString();
  console.log(req.params.date_string);
     res.json({
       unix: unix2,
       utc: utc2
     })
  }
 if(validateDate(date) === false){
    res.json({
    unix: unix,
    utc: utc
  });
  } else{
if(req.params.date == undefined ) {
    let fecha2 = new Date();
     let unix2 = Date.parse(fecha2);
     let utc2 =  fecha2.toUTCString();
     res.json({
       unix: unix2,
       utc: utc2
     })
   }else{
     res.json({ error: "Invalid Date"});
   }
  }

  //res.json({ error: "Invalid Date"});

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

/*var fecha =new Date();

console.log(fecha);
console.log(Date.parse(fecha));
console.log(fecha.toUTCString());*/ 
