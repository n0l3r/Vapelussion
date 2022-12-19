const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
// get image from assets folder
app.use('/assets', express.static('assets'));

// get image from assets folder

const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
const cartRouter = require('./routes/cart');
const notificationRouter = require('./routes/notification');
const wishlistRouter = require('./routes/wishlist');
const orderRouter = require('./routes/order');

app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/carts', cartRouter);
app.use('/notification', notificationRouter);
app.use('/wishlist', wishlistRouter);
app.use('/order', orderRouter);



app.get('/', (req, res) => res.send('Hello World!'));




app.listen(port, () => console.log(`Example app listening on port ${port}!`));

