const db = require('../config/db');
const express = require('express');
const wishlistRouter = express.Router();

// Get all wishlists by user
wishlistRouter.get('/:userId', (req, res) => {
    let sql = "SELECT * FROM wishlists WHERE user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    })
});

// Add new wishlist
wishlistRouter.post('/add', (req, res) => {
    let data = {user_id: req.body.user_id, product_id: req.body.product_id};
    let sql = "INSERT INTO wishlists SET ?";
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send('Wishlist added successfully');
    });
});

// Delete wishlist
wishlistRouter.delete('/delete/:user_id/:product_id', (req, res) => {
    let sql = "DELETE FROM wishlists WHERE user_id="+req.params.user_id+" AND product_id="+req.params.product_id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Wishlist deleted successfully');
    });
});

module.exports = wishlistRouter;

