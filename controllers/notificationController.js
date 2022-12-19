const db = require('../config/db');

const getAllNotificationsByUser = (req, res) => {
    let sql = "SELECT * FROM notifications WHERE user_id="+req.params.userId;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err);
        res.status(200).send(result);
    })
}

const addNotification = (req, res) => {
    let data = {user_id: req.body.data.user_id, message: req.body.data.message};
    let sql = "INSERT INTO notifications SET ?";
    db.query(sql, data, (err, result) => {
        if(err) res.status(500).send
        res.status(203).send('Notification added successfully');
    })
}

const deleteNotification = (req, res) => {
    let sql = "DELETE FROM notifications WHERE id="+req.params.notifId;
    db.query(sql, (err, result) => {
        if(err) res.status(500).send
        res.status(203).send('Notification deleted successfully');
    })
}

module.exports = {
    getAllNotificationsByUser,
    addNotification,
    deleteNotification
}