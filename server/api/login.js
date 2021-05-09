const express = require('express');
const router = express.Router(); 
const bcrypt = require('bcrypt');

const jwt = require ('jsonwebtoken');

const User = require('../models/User');

router.get('/', async (req, res) => {
    await res.json('Logged In!');
});

//login
router.post('/', async (req, res) => { 
    const {email, password} = req.body; 
    await User.find({email: email})
    .then(user => {
        //genero il token e lo invio una volta effettuato il login
        let token = jwt.sign({id: user._id}, process.env.TOKEN_SECRET, {expiresIn: 86400}); //24hours
        res.send({
            token: token,
            user: user
        })

    })
    .catch(err => {
    res.json({msg:'Email or password not found' , error: err});

    });
})

module.exports = router;