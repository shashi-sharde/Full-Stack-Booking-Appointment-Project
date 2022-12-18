const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('User',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    Name: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    Email: {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    Phonenumber: {
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
    }
})

module.exports = User;