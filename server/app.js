const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const todoRoutes = require('./api/todos');

const app = express();
const port = process.env.PORT;


app.use(cors());

//Connect Database
mongoose.connect(
   process.env.MONGODB_URI,
   {useNewUrlParser: true, useUnifiedTopology: true  }
).then(result => {
    console.log('CONNECTED');
})

//set the findAndModify: false 
//to avoid the warning message
mongoose.set('useFindAndModify', false);



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World')
});

//setto la route per collegarmi alle mie crud
app.use('/todos',todoRoutes);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});