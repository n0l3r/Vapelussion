const express = require('express');
const db = require('./config/db');
const userRouter = require('./routes/user');

userRouter.get('/:id', (req, res) => {
    let sql = "SELECT * FROM users WHERE id="+req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Register new user
userRouter.post('/add', (req, res) => {
    let data = {
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password, 
        role: req.body.role,
        phone: req.body.phone,
        address: req.body.address
    };
    let sql = "INSERT INTO users SET ?";
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send('User added successfully');
    });
});

// Update user
userRouter.put('/update/:id', (req, res) => {
    let sql = "UPDATE users SET name='"+req.body.name+"', email='"+req.body.email+"', password='"+req.body.password+"', role='"+req.body.role+"', phone='"+req.body.phone+"', address='"+req.body.address+"' WHERE id="+req.params.id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('User updated successfully');
    });
});

module.exports = userRouter;