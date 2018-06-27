var path = require("path");

// only app.get("dir",)
module.exports = function(app){

    // app.get("/directory",function(req,res){
    //     res.sendFile(path.join(__dirname,"../public/html/page.html")); // redirect them to my html page
    // });

    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/html/login.html"));// HOMEPAGE
    });

    app.get("/nextpage",function(req,res){
        res.sendFile(path.join(__dirname,"../public/html/nextpage.html"));
    });
}