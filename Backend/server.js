// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js'
import Product from './models/product.js';

// Load environmental variables
dotenv.config();

// express() initializes an Express application and assigns it to app
const app = express();

// Allows to accept JSON data in the req.body
app.use(express.json());

/*
* Sets up a HTTP route at /
* When a request is sent to http://localhost:8000/, it responds with "Server ready".
*/
app.get("/", (req, res) => {
    res.send("Server ready");
})

// API to create a new product
app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "Please provide all the required fields" });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch(error) {
        console.error("Error in creating product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

// API to delete a product
app.delete("/api/products/:id", async(req, res) => {
    const { id } = req.params;
    
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ "success": true, message: "Product deleted" });
    } catch(error) {
        res.status(404).json({ "success": false, message: "Product not found" })
    }
})

// API to get products
app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ "success": true, data: products});
    } catch(error) {
        console.error("Error in fetching products:", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
})

/*
* Start the server
* Makes the server listens to the port 8000
*/
app.listen(8000, () => {
    connectDB();
    console.log('Server started at http://localhost:8000');
})