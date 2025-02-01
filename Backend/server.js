// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'

// Load environmental variables
dotenv.config();

// express() initializes an Express application and assigns it to app
const app = express();

/*
* Sets up a HTTP route at /
* When a request is sent to http://localhost:8000/, it responds with "Server ready".
*/
app.get("/", (req, res) => {
    res.send("Server ready");
})

/*
* Start the server
* Makes the server listens to the port 8000
*/
app.listen(8000, () => {
    connectDB();
    console.log('Server started at http://localhost:8000');
})