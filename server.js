var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/", function(req, res){
// 	res.send("DOHHHHHH!");
// });

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




