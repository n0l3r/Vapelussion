const db = require('../config/db');

const getAllCartByUser = (req, res) => {
    // let sql = "SELECT * FROM carts WHERE user_id="+req.params.userId;
    // db.query(sql, (err, result) => {
    //     if(err) res.status(500).send(err);
    //     res.send(result);
    // })
    // join table carts and products
    let sql = "SELECT carts.id, carts.user_id, carts.product_id, carts.quantity, products.name, products.price, products.image FROM carts JOIN products ON carts.product_id=products.id WHERE carts.user_id=" + req.params.userId;
    db.query(sql, (err, result) => {
        if (err) res.status(500).send(err);
        res.send(result);
    })

}

const addCart = (req, res) => {
    let data = {
        user_id: req.body.data.user_id,
        product_id: req.body.data.product_id,
        quantity: req.body.data.quantity
    };
    let sql = "INSERT INTO carts SET ?";
    db.query(sql, data, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(203).send('Cart added successfully');
    })
}

const updateCart = (req, res) => {
    let data = { quantity: req.body.data.quantity };
    let sql = "UPDATE carts SET quantity=" + req.body.data.quantity + " WHERE id=" + req.params.cartId;
    db.query(sql, data, (err, result) => {
        if (err) res.status(500).send(err);
        res.status(203).send('Cart updated successfully');
    })
}

const deleteCart = (req, res) => {
    let sql = "DELETE FROM carts WHERE id = " + req.params.cartId;
    db.query(sql, (err, result) => {
        if (err) res.status(500).send
        res.status(203).send('Cart deleted successfully');
    })
}

const checkout = (req, res) => {
    let sql = "INSERT INTO orders SELECT * FROM carts WHERE user_id=" + req.params.userId;
    db.query(sql, (err, result) => {
        if (err) res.status(500).send(err);
        let sql = "DELETE FROM carts WHERE user_id=" + req.params.userId;
        db.query(sql, (err, result) => {
            if (err) res.status(500).send(err);
            res.status(203).send({ status: "success", message: "Checkout success" });
        })
    })


}


module.exports = {
    getAllCartByUser,
    addCart,
    deleteCart,
    updateCart,
    checkout
}
