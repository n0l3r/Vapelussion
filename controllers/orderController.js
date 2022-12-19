const db = require('../config/db');

// get all orders by user
const getAllOrdersByUser = (req, res) => {
    // join table orders and products
    let sql = "SELECT orders.id, orders.user_id, orders.product_id, orders.quantity, products.name, products.description, products.price, products.image FROM orders JOIN products ON orders.product_id=products.id WHERE orders.user_id=" + req.params.userId;
    db.query(sql, (err, result) => {
        if (err) res.status(500).send
        res.send(result);
    })
}

module.exports = {
    getAllOrdersByUser
}