const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    let token = req.headers['x-access-token'];
    if(!token) return res.send({auth: false, message: 'Unauthorized.'});

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(403).send({auth: false, message: 'Failed to authenticate token.'});

        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyJWT;