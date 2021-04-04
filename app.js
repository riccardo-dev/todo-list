const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

const MONGODB_URI =  "mongodb+srv://admin:iQgKf3gL4tT28Pwb@cluster0.owg0z.mongodb.net/todo?retryWrites=true&w=majority";


//Connect Database
mongoose.connect(
    MONGODB_URI
).then(result => {
    console.log('CONNECTED');
}

)

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});