const express = require('express');
const db = require('./config/db');
const app = express();
const port = 3000;

app.use(express.json());

const productRouter = require('./routes/product');

app.use('/product', productRouter);


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

