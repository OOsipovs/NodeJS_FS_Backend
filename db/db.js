const mongoose = require("mongoose")
require('dotenv').config();
const User = require("../models/userModel");

const connect = async () => {
    await mongoose.connect(process.env.mongo, () =>{
        console.log(`MongoDB is up and running`);
    });
};

const disconnect = async () => {
    await mongoose.connection.close();
}

const findUser = async(obj) => {
    return User.findOne(obj);
}

const saveUser = async(newUser) => {
    return await newUser.save();
}

module.exports = { connect, disconnect, findUser, saveUser }