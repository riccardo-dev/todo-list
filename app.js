const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path'); 


dotenv.config();

const todoRoutes = require('./api/todos');
const userRoutes = require('./api/users');
const loginRoutes = require('./api/login');

const app = express();
const port = process.env.PORT || 8080;

// enabling CORS for all requests
app.use(cors());

// adding Helmet to enhance your API's security
app.use(helmet());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

//Connect Database
mongoose.connect(
   process.env.MONGODB_URI,
   {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: false  }
).then(result => {
    console.log('CONNECTED');
})

//set the findAndModify: false 
//to avoid the warning message
mongoose.set('useFindAndModify', false);



app.use(express.urlencoded({extended: true}));
app.use(express.json());





//setto la route per collegarmi alle mie crud
app.use('/todos', todoRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRoutes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'))
    });
}


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});