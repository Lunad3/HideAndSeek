var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3000;

//set up express to use bodyparser
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static("public"));// need to make public folder

//routes
// require("");


//run app
app.listen(PORT,()=>console.log("App listening on http://localhost:" + PORT));