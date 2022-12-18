const express = require('express');
const db = require('../config/db');

const notificationRouter = express.Router();

// Get all notifications by user
notificationRouter.get('/:userId', (req, res) => {
    let sql = "SELECT * FROM notifications WHERE user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(result);
    });
});

// Add new notification
notificationRouter.post('/add', (req, res) => {
    let data = {user_id: req.body.user_id, product_id: req.body.product_id, message: req.body.message};
    let sql = "INSERT INTO notifications SET ?";
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.send('Notification added successfully');
    });
});

// Delete notification
notificationRouter.delete('/delete/:user_id/:notif_id', (req, res) => {
    let sql = "DELETE FROM notifications WHERE user_id="+req.params.user_id+" AND product_id="+req.params.product_id;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send('Notification deleted successfully');
    });
});

module.exports = notificationRouter;