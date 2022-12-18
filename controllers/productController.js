const db = require('../config/db');

const getAllProducts = (req, res) => {
    let sql = "SELECT * FROM products";
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(200).send(result);
    });
}

const getProductById = (req, res) => {
    let sql = "SELECT * FROM products WHERE id="+req.params.id;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err)
        res.status(200).send(result);
    })
}

const getProductsByCategory = (req, res) => {
    let sql = "SELECT * FROM products WHERE category_id="+req.params.id;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err)
        res.status(200).send(result);
    })
}

const addProduct = (req, res) => {
    let data = {category_id: req.body.category_id, name: req.body.name, price: req.body.price, description: req.body.description, image: req.body.image};
    let sql = "INSERT INTO products SET ?";
    db.query(sql, data,(err, result) => {
        if(err) throw err;
        res.status(203).send('Product added successfully');
    })
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByCategory,
    addProduct
}

