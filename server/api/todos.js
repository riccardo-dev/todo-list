const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');


//@route GET /todos/test
//@description tests todos route
//@access Public 
router.get('/test', (req, res) => res.send('todo route testing!'));

//@route GET /todos
//@description Get all todo
//@access Public
router.get('/', (req, res) => {
    Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(404).json( {
        NoTodosFound: 'No Todos found'
    }));
});

//@route GET /todos/:id
//@description Get a single todo by id
//@access Public
router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(404).json( {
        NoTodosFound: 'No Todos found'
    }));
});


//@route POST /todos
//@description add/save todo
//@access Public
router.post('/', (req, res) => {
    Todo.create(req.body)
    .then(todo => res.json({msg: 'Todo added successfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add this todo'}));
});

//@route PUT /todos/:id
//@description Update Todo
//@access Public
router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
    .then(todo => res.json({ msg: 'Updated successfully'}))
    .catch( err => res.status(400).json({ error: 'Unable to update this todo'}));
});

//@route DELETE /todos/:id
//@description Delete todo by id
//@access Public
router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
    .then(todo => res.json({ msg: 'Deleted successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to delete this todo'}));
});

module.exports = router;