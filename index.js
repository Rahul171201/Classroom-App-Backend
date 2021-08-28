// requiring modules
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

// admin:
// username : Rahul | password : 12345

// establishing connections
dotenv.config();
mongoose 
 .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
     })    
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use('/auth', authRoute);


app.listen('4000', () => {
    console.log("Listening at port 4000");
});