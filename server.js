var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    fs = require('fs');
    //unirest = require('unirest');


app.use('/cache', express.static('public/cache'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

server.listen(65432, function () {
  console.log('Example app listening on port 65432!');
});
