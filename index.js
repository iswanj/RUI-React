// var express = require('express');
// var app = express();
// app.use(express.static(__dirname + '/public'));
// app.listen(process.env.PORT || 3000);
var path = require('path');
var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});


app.listen(process.env.PORT || 3000, function() { console.log('listening')});
