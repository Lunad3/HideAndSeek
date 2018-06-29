const Users = require("../models/user");

const userExists = function(userCredentials){
    Users.findOne({
        where:{
            username: userCredentials.username,
            password: userCredentials.password
        }
    }).then(result=>{
        console.log(result);
    })
};

module.exports = app=>{
    //given credentials for a user, attempt a login
    app.post("/api/findUser",(req,res)=>{
        Users.findOne({
            //search for username
            where: {username:req.body.username}
        }).then(dbResult=>{
            //default that credentials not found
            let response = {
                usernameFound: false,
                passwordMatch: false
            }
            //if username exists
            if(dbResult != null){
                response.usernameFound = true;
                //if passwords match
                if(dbResult.password == req.body.password){
                    response.passwordMatch = true;
                }
            }
            res.json(response);
        });
    });

    app.post("/api/signup",(req,res)=>{
        const newUserCredentials = req.body;
        Users.create({
            username: newUserCredentials.username,
            password: newUserCredentials.password
        });
    });
}