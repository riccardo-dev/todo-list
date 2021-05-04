const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');


//@route GET /users/test
//@description tests users route
//@access Public
router.get('/test', async (req, res) => await res.send('user route testing!'));

//@route GET /users
//@description Get all user
//@access Public
router.get('/', async(req, res) => {
    await User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json({
        NoUserFound: 'No User found'
    }));
});


//@route GET /users/:id
//@description Get a single user by id
//@access Public
router.get('/:id', async(req, res) => {
    await User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json({
        NoUserFound: 'No User found'
    }));
});


//@route GET /users/:username/todos
//@description Get all todos of a single user
//@access Public
router.get('/:username/todos', async(req, res) => {
    try {
        let foundUser = await User.find({username: req.params.username}).populate('todo');
        res.json(foundUser.map(user => user.todos));
    } catch (error) {
        console.log(error.message);        
    }
})


//@route POST /users
//@description tests users route
//@access Public
router.post('/', async(req, res) => {
    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    await User.create({
        email: req.body.email,
        password: hashPassword,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username
    })
    .then(user => res.json({msg: 'User added successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add this user'}));
});


//@route PUT /users/:id
//@description Update User
//@access Public
router.put('/:id', async(req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => res.json({msg: 'Updated successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to update this user'}));
});


router.delete('/:id', async(req, res) => {
    User.findByIdAndRemove(req.params.id, req.body)
    .then(user => res.json({msg: 'Deleted successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to delete users'}));
});

module.exports = router;
