var express = require("express");
var app = express();
var path = require("path");
var port = 5000;

app.use(express.static("server/public"));

// FROM CLIENT (with love)
// GET url: "/kitt/scott/teacher"
//            |
//            V


app.get("/kitty/:valOne/:valTwo", function(req,res){
  console.log(req.params);
  //THIS WONT WORK!
  var math = add(req.params.valOne, req.params.valTwo);
  /*
  Here is going to be where we reach into the database
  and get specific info BASED on what we are looking for
  Such as "name" and "details"
  */
  res.send(math);
});

function add(x , y){
  return x + y;
}

app.get("/", function( req, res ){
  res.sendFile(path.resolve("server/public/views/index.html"));
});

// app.get("/*", function(req, res){
//   res.send("NOPE!");
// });

app.listen(port, function(){
  console.log("Listening on port! : ", port);
});
