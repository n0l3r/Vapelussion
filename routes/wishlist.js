const express = require('express');
const { getAllWishlistByUser, addWishlist, deleteWishlist } = require('../controllers/wishlistController');
const verifyJWT = require('../middlewares/verifyJWT');
const wishlistRouter = express.Router();

// Get all wishlists by user
wishlistRouter.get('/:userId', verifyJWT, getAllWishlistByUser);

// Add new wishlist
wishlistRouter.post('/add', verifyJWT, addWishlist);

// Delete wishlist
wishlistRouter.delete('/delete/:user_id/:product_id', verifyJWT, deleteWishlist);

module.exports = wishlistRouter;

