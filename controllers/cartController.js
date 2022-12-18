const db = require('../config/db');

const getAllCartByUser = (req, res) => {
    let sql = "SELECT * FROM carts WHERE user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err);
        res.send(result);
    })
}

const addCart = (req, res) => {
    let data = {
        user_id: req.body.user_id, 
        product_id: req.body.product_id, 
        quantity: req.body.quantity};
    let sql = "INSERT INTO carts SET ?";
    db.query(sql, data, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(203).send('Cart added successfully');
    })
}

const updateCart = (req, res) => {
    let data = {quantity: req.body.quantity};
    let sql = "UPDATE carts SET ? WHERE user_id="+req.params.user_id+" AND product_id="+req.params.product_id;
    db.query(sql, data, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(203).send('Cart updated successfully');
    })
}

const deleteCart = (req, res) => {
    let sql = "DELETE FROM cart WHERE user_id="+req.params.user_id+" AND product_id="+req.params.product_id;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send
        res.status(203).send('Cart deleted successfully');
    })
}

const checkout = (req, res) => {
    for(let i=0; i<req.body.data; i++){
        let sql = "DELETE FROM cart WHERE user_id="+req.params.user_id+" AND product_id="+req.body.data[i].product_id;
        db.query(sql, (err, result) => {
            if(err) res.status(500).send(err);
            let sqlHistory = "INSERT INTO orders SET ?";
            db.query(sqlHistory, req.body.data[i], (err, result) => {
                if(err) res.status(500).send(err)
                
            })
        })
    }
    res.status(203).send({status: "success", message: "Checkout success"});
}


module.exports = {
    getAllCartByUser,
    addCart,
    deleteCart,
    updateCart,
    checkout
}
