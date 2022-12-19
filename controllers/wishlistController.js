const db = require('../config/db');

const getAllWishlistByUser = (req, res) => {
    // join products and wishlists table
    let sql = "SELECT wishlists.id, wishlists.user_id, wishlists.product_id, products.name, products.price, products.image FROM wishlists JOIN products ON wishlists.product_id=products.id WHERE wishlists.user_id=" + req.params.userId;
    db.query(sql, (err, result) => {
        if (err) res.status(500).send
        res.status(200).send(result);
    })
}

const addWishlist = (req, res) => {
    let data = {
        user_id: req.body.data.user_id, 
        product_id: req.body.data.product_id};
    let sql = "INSERT INTO wishlists SET ?";
    db.query(sql, data, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(203).send({status: 'success', message: 'Wishlist added successfully'});
    })
}

const deleteWishlist = (req, res) => {
    let sql = "DELETE FROM wishlists WHERE product_id="+req.params.productId+" AND user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send
        res.status(203).send('Wishlist deleted successfully');
    })
}

const getAllWishlistByUserByProduct = (req, res) => {
    let sql = "SELECT * FROM wishlists WHERE user_id="+req.params.userId+" AND product_id="+req.params.productId;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err);
        if(result.length == 0){
            res.status(200).send({status: 'not found'});
            return;
        } else{
            res.status(200).send({status: 'found'});
            return;
        }S
    })
}

module.exports = {
    getAllWishlistByUser,
    addWishlist,
    deleteWishlist,
    getAllWishlistByUserByProduct
}

