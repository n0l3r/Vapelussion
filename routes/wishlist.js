const express = require('express');
const { getAllWishlistByUser, addWishlist, deleteWishlist, getAllWishlistByUserByProduct } = require('../controllers/wishlistController');
const verifyJWT = require('../middlewares/verifyJWT');
const wishlistRouter = express.Router();

// Get all wishlists by user
wishlistRouter.get('/:userId', verifyJWT, getAllWishlistByUser);

// Add new wishlist
wishlistRouter.post('/add', addWishlist);

// Delete wishlist
wishlistRouter.delete('/delete/:userId/:productId', verifyJWT, deleteWishlist);

// Get all wishlists by user by product
wishlistRouter.get('/check/:userId/:productId', verifyJWT, getAllWishlistByUserByProduct);

module.exports = wishlistRouter;

