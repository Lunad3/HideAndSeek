const Sequelize = require("sequelize");
const db = require("../config/connection.js");

// creates users table with columns:username,password,numcharaters
const Users = db.define("users",{
    username: Sequelize.String,
    password: Sequelize.STRING,
    numCharacters: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
});

Users.sync();

module.exports = Users;