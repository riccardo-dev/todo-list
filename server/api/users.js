const express = require('express');
const router = express.Router();


const User = require('../models/User');


//@route GET /users/test
//@description tests users route
//@access Public
router.get('/test', (req, res) => res.send('user route testing!'));

//@route GET /users
//@description Get all user
//@access Public
router.get('/', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({
        NoUserFound: 'No User found'
    }));
});


//@route GET /users/:id
//@description Get a single user by id
//@access Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({
        NoUserFound: 'No User found'
    }));
});


//@route POST /users
//@description tests users route
//@access Public
router.post('/', (req, res) => {
    User.create(req.body)
    .then(user => res.json({msg: 'User added successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add this user'}));
});


//@route PUT /users/:id
//@description Update User
//@access Public
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({msg: 'Updated successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to update this user'}));
});


router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({msg: 'Deleted successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to delete users'}));
});

module.exports = router;
