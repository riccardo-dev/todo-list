const express = require('express');
const router = express.Router();

const Todo = require('../models/todo');

//@route GET api/todos
// @description Get all todo
//@access Public
router.get('/', (req, res) => {
    Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json( {
        notodosfound: 'No Toods found'
    }));
});

//@route GET api/todos/:id
//@description Get a single todo by id
//@access Public
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(404).json( {
        notodosfound: 'No Toods found'
    }));
});