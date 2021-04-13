const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    todos: [{
        type: Schema.Types.ObjectId,
        ref: 'Todo'
    }]
}, {versionKey: false});

module.exports = User = mongoose.model('user', UserSchema);