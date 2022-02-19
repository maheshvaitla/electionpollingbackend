const express= require("express");

const app=express();

app.use(express.json());

const citycontroller = require("./controllers/city.controller");

app.use("/cities" , citycontroller);
module.exports =app;