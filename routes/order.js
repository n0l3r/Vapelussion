const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const { getAllOrdersByUser } = require('../controllers/orderController');

const orderRouter = express.Router();

orderRouter.get('/:userId', verifyJWT, getAllOrdersByUser);

module.exports = orderRouter;
