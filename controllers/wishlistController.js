const db = require('../config/db');

const getAllWishlistByUser = (req, res) => {
    let sql = "SELECT * FROM wishlists WHERE user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(200).send(result);
    })
}

const addWishlist = (req, res) => {
    let data = {
        user_id: req.body.user_id, 
        product_id: req.body.product_id};
    let sql = "INSERT INTO wishlists SET ?";
    db.query(sql, data, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(203).send({status: 'success', message: 'Wishlist added successfully'});
    })
}

const deleteWishlist = (req, res) => {
    let sql = "DELETE FROM wishlists WHERE user_id="+req.params.user_id+" AND product_id="+req.params.product_id;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send
        res.status(203).send('Wishlist deleted successfully');
    })
}

module.exports = {
    getAllWishlistByUser,
    addWishlist,
    deleteWishlist
}

