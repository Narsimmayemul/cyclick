const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json());

app.get("/" , (req , res)=>{
    try {
        res.send('this is home page');
    } catch (error) {
        console.log('this from get fun');
    }
})

app.get("/welcome" , (req , res)=>{
    try {
        res.send('this is welcome page');
    } catch (error) {
        console.log('this from get fun');
    }
})

app.get("/data" , (req , res)=>{
    try {
        res.send('this is data page');
    } catch (error) {
        console.log('this from get fun');
    }
})


const port = process.env.PORT;
app.listen(port)