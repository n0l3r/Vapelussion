const express = require('express');
const db = require('./config/db');

const cartRouter = express.Router();

// Get all carts by user
cartRouter.get('/:userId', (req, res) => {
    let sql = "SELECT * FROM carts WHERE user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });

});

// Add new cart
cartRouter.post('/add', (req, res) => {
    let data = {user_id: req.body.user_id, product_id: req.body.product_id, quantity: req.body.quantity};
    let sql = "INSERT INTO carts SET ?";
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send('Cart added successfully');
    });

});

// Delete cart
cartRouter.delete('/delete/:user_id/:product_id', (req, res) => {
    let sql = "DELETE FROM carts WHERE user_id="+req.params.user_id+" AND product_id="+req.params.product_id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Cart deleted successfully');
    });

});

module.exports = cartRouter;