var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs("mydb", ['Users']);
var bodyParser = require('body-parser');
var server = require('http').Server(app);


app.use(express.static(__dirname + "../public"));
app.use(bodyParser.json());

app.get("/getUserInfo", function(err, response){
  if (err) {
    console.log(err);
  } else {
    response.json(docs);
  }
})

server.listen(8081, function() {
    console.log("Server Running on port 8081.");
});
