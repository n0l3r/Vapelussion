const express = require('express');
const verifyJWT = require('../middlewares/verifyJWT');
const { register, login, logout } = require('../controllers/authController');


const authRouter = express.Router();

// Login
authRouter.post('/login', login);

// Register
authRouter.post('/register', register);

// Logout
authRouter.get('/logout', verifyJWT, logout);

module.exports = authRouter;


