const db = require('../config/db');
const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const { getAllProducts, getProductById, getProductsByCategory } = require('../controllers/productController');

const productRouter = express.Router();

// Get all products
productRouter.get('/', verifyJWT, getAllProducts);

// Get single product
productRouter.get('/:id', verifyJWT, getProductById);

// Get products by category
productRouter.get('/category/:id', verifyJWT, getProductsByCategory);

// Add new product
productRouter.post('/add', (req, res) => {
    let data = {category_id: req.body.category_id, name: req.body.name, price: req.body.price, description: req.body.description, image: req.body.image};
    let sql = "INSERT INTO products SET ?";
    db.query(sql, data,(err, result) => {
        if(err) throw err;
        res.send('Product added successfully');
    });
});

module.exports = productRouter;