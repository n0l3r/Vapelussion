const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const { getAllCartByUser, addCart, deleteCart, updateCart, checkout } = require('../controllers/cartController');

const cartRouter = express.Router();

// Get all carts by user
cartRouter.get('/:userId', verifyJWT, getAllCartByUser);

// Add new cart
cartRouter.post('/add', verifyJWT, addCart);

// Update cart
cartRouter.put('/update/:user_id/:product_id', verifyJWT, updateCart);

// Delete cart
cartRouter.delete('/delete/:user_id/:product_id', verifyJWT, deleteCart);

cartRouter.delete('/delete/:user_id', verifyJWT, checkout);

module.exports = cartRouter;