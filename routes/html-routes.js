var path = require("path");

// only app.get("dir",)
module.exports = function(app){

    // app.get("/directory",function(req,res){
    //     res.sendFile(path.join(__dirname,"../public/page.html")); // redirect them to my html page
    // });

    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"public/index.html"));// HOMEPAGE
    });
}