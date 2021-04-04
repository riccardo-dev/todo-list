const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});