require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Port = process.env.Port || 8000;


const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
// const connectDb = require("./db/connect")
// const EmployeeModel =require('./models/employee')
let connectToDatabase = require("./db/connect")
const User = require('./models/User');
// const bcrypt = require('bcryptjs');





app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (password === user.password) { // This should be using hashed passwords
                res.send({ message: "Login successful", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (err) {
        res.send({ message: "An error occurred", error: err.message });
    }
});




app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email: email });
        
        if (user) {
            return res.send({ message: "User already registered" });
        } else {
            const newUser = new User({
                name,
                email,
                password
            });

            await newUser.save();
            return res.send({ message: "Successfully registered , Please Login now" });
        }
    } catch (err) {
        return res.send({ error: err.message });
    }
});



const start = async () =>{
    
    try{
        await connectToDatabase(process.env.MONGODB_URL)
   
    app.listen(Port, ()=>{
         console.log(`${Port} IS CONNECTED`);
        })
    }catch(error) {
        console.log(error);
    }
}

start()


module.exports = app;