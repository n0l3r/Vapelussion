const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('./config/db');
const app = express();
const port = 3000;

app.use(express.json());
// get image from assets folder
app.use('/assets', express.static('assets'));

// get image from assets folder

const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');
const notificationRouter = require('./routes/notification');
const wishlistRouter = require('./routes/wishlist');

app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/notification', notificationRouter);
app.use('/wishlist', wishlistRouter);



app.get('/', (req, res) => res.send('Hello World!'));




app.listen(port, () => console.log(`Example app listening on port ${port}!`));

