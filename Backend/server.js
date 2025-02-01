// const express = require('express');
import express from 'express';

const app = express();

// Create a route
app.get("/", (req, res) => {
    res.send("Server ready");
})

app.listen(8000, () => {
    console.log('Server started at http://localhost:8000');
})