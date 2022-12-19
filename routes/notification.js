const express = require('express');
const { getAllNotificationsByUser, addNotification, deleteNotification } = require('../controllers/notificationController');
const verifyJWT = require('../middlewares/verifyJWT');

const notificationRouter = express.Router();

// Get all notifications by user
notificationRouter.get('/:userId', verifyJWT, getAllNotificationsByUser);

// Add new notification
notificationRouter.post('/add', addNotification);

// Delete notification
notificationRouter.delete('/delete/:notifId', verifyJWT, deleteNotification);

module.exports = notificationRouter;