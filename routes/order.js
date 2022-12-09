const express = require('express');
const db = require('./config/db');
const orderRouter = express.Router();

// Get all orders by user
orderRouter.get('/:userId', (req, res) => {
    let sql = "SELECT * FROM orders WHERE user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Add new order
orderRouter.post('/add', (req, res) => {
    let data = {user_id: req.body.user_id, product_id: req.body.product_id, quantity: req.body.quantity};
    let sql = "INSERT INTO orders SET ?";
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send('Order added successfully');
    });
});
