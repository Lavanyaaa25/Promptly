require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// ################################ MONGO DB CONNECTION ################################

mongoose.connect('mongodb://127.0.0.1:27017/Promptly').then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Connection error:', err));

const userRoute = require('./Routes/User');
const publishRoute = require('./Routes/Publish');
const profileRoute = require('./Routes/Profile');
const feedRoute = require('./Routes/Feed');
const deleteRoute = require('./Routes/DeletePrompt');
const saveRoute = require('./Routes/SavePrompt');
const editRoute = require('./Routes/Edit');

app.use('/user',userRoute);
app.use('/publish',publishRoute);
app.use('/users',profileRoute);
app.use('/feed',feedRoute);
app.use('/delete',deleteRoute);
app.use('/save',saveRoute);
app.use('/edit',editRoute);

app.listen(3030, () => console.log("Server running on port 3030"));