// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import productRouts from './routes/product.route.js';

// Load environmental variables
dotenv.config();

// express() initializes an Express application and assigns it to app
const app = express();

// Allows to accept JSON data in the req.body
app.use(express.json());

app.use("/api/products", productRouts);

/*
* Start the server
* Makes the server listens to the port 8000
*/
app.listen(8000, () => {
    connectDB();
    console.log('Server started at http://localhost:8000');
})