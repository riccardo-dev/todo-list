const mongoose = require('mongoose');

//creo il model in cui aggiungo tutte le proprietà 
//che deve avere la mia tabella
const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    completed: { type: Boolean },
    
}, {versionKey: false});

module.exports = Todo = mongoose.model('todo', TodoSchema);