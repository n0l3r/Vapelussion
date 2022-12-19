const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const register = (req, res) => {
    console.log(req.body.data);
    // encrypt password
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.data.password, salt);
    req.body.data.password = hash;

    let data = {
        name: req.body.data.name, 
        email: req.body.data.email, 
        password: req.body.data.password,
        role: req.body.data.role,
        phone: req.body.data.phone,
        address: req.body.data.address,
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
    console.log(req.body.data);
    if(!req.body.data.email || !req.body.data.password) return res.status(401).send({auth: false, token: null, message: 'Email and password are required'})
    

    let sql = "SELECT * FROM users WHERE email='"+req.body.data.email+"'";
    db.query(sql, (err, result) => {
        if(err) res.status(500).send(err)
        if(result.length > 0){
            let passwordIsValid = bcrypt.compareSync(req.body.data.password, result[0].password);
            if(!passwordIsValid) return res.status(401).send({auth: false, token: null, message: 'Wrong password'});
            let token = jwt.sign({id: result[0].id}, process.env.JWT_SECRET, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({auth: true, token: token, user: result[0]});
        }else{
            res.status(401).send({auth: false, token: null, message: 'User not found'});
        }
    });
}

const update = (req, res) => {
    let data = {
        name: req.body.data.name,
        email: req.body.data.email,
        phone: req.body.data.phone,
        address: req.body.data.address,
        // image: req.body.data.image
    };
    let sql = "UPDATE users SET ? WHERE id="+req.params.userId;
    db.query(sql, data, (err, result) => {
        if(err) res.status(500).send(err)
        res.status(203).send('User updated successfully');
    });
}


const logout = (req, res) => {
    res.status(203).send({auth: false, token: null});
}

module.exports = {
    register,
    login,
    logout,
    update
}

