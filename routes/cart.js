const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const { getAllCartByUser, addCart, deleteCart, updateCart, checkout } = require('../controllers/cartController');

const cartRouter = express.Router();



// Get all carts by user
cartRouter.get('/:userId', verifyJWT, getAllCartByUser);

// Add new cart
cartRouter.post('/add', addCart);

// Update cart
cartRouter.put('/update/:cartId', updateCart);

// Delete cart
cartRouter.delete('/delete/:cartId', verifyJWT, deleteCart);

cartRouter.delete('/checkout/:userId', verifyJWT, checkout);

module.exports = cartRouter;