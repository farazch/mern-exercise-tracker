const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true , useUnifiedTopology: true}
);

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB connection establised successfully");    
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises',exercisesRouter);
app.use('/users',usersRouter);

app.listen(port,() => console.log("Listening to port ${port}."));