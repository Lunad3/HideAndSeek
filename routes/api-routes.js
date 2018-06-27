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
    app.post("/api/login",(req,res)=>{
        const user = req.body;
        Users.findOne({
            where:{
                username: user.username,
                password: user.password
            }
        }).then(result=>{
            console.log(result);
            if(result != null){

            }
            res.json(result);
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