const db = require('../config/db');
const express = require('express');
const productRouter = express.Router();

// Get all products
productRouter.get('/', (req, res) => {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Get single product
productRouter.get('/:id', (req, res) => {
    let sql = "SELECT * FROM products WHERE id="+req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Get products by category
productRouter.get('/category/:id', (req, res) => {
    let sql = "SELECT * FROM products WHERE category_id="+req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Add new product
productRouter.post('/add', (req, res) => {
    let data = {category_id: req.body.category_id, name: req.body.name, price: req.body.price, description: req.body.description, image: req.body.image};
    let sql = "INSERT INTO products SET ?";
    db.query(sql, data,(err, result) => {
        if(err) throw err;
        res.send('Product added successfully');
    });
});

module.exports = productRouter;