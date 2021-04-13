const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//creo il model in cui aggiungo tutte le proprietà 
//che deve avere la mia tabella
const TodoSchema = Schema({
    task: {
        type: String,
        required: true
    },
    completed: { 
        type: Boolean,
        default: false 
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {versionKey: false});

module.exports = Todo = mongoose.model('todo', TodoSchema);