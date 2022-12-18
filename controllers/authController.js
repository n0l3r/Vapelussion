const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = (req, res) => {
    // encrypt password
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;

    let data = {
        name: req.body.name, 
        email: req.body.email, 
        password: req.body.password,
        role: req.body.role,
        phone: req.body.phone,
        address: req.body.address,
        image: "default.jpg"
    };
    let sql = "INSERT INTO users SET ?";
    db.query(sql, data, (err, result) => {
        if(err) res.status(500).send(err)
        res.status(203).send('User added successfully');
    });
}

const login = (req, res) => {
    // encrypt password
    

    let sql = "SELECT * FROM users WHERE email='"+req.body.email+"'";
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err)
        if(result.length > 0){
            let passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password);
            if(!passwordIsValid) return res.status(401).send({auth: false, token: null, message: 'Wrong password'});
            let token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({auth: true, token: token});
        }else{
            res.status(401).send({auth: false, token: null, message: 'User not found'});
        }
    });
}

const logout = (req, res) => {
    res.status(203).send({auth: false, token: null});
}

module.exports = {
    register,
    login,
    logout
}

