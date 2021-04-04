const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT;


app.use(cors());

//Connect Database
mongoose.connect(
   process.env.MONGODB_URI
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