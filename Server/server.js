const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./Models/User');
const Prompt = require('./Models/Prompt');
const bcrypt = require('bcryptjs');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// ################################ MONGO DB CONNECTION ################################

mongoose.connect('mongodb://127.0.0.1:27017/Promptly').then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Connection error:', err));

// ###################################### REGISTER ######################################

app.post('/register', async (req,res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            username: req.body.name,
            email: req.body.email,
            password: newPassword,
            posts:[],
            saved:[]
        })
        res.json({ status: 'ok', message: 'Registered' });
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email or username' })
    }
})

// ###################################### LOG IN ######################################

app.post('/login', async (req,res) => {
    const test = await User.findOne({
        email: req.body.email
    })
    if (!test) {
        return res.json({ status: 'error', message: 'Invalid email or password' });
    }
    const validatePassword = await bcrypt.compare(
        req.body.password,
        test.password
        )
        if (validatePassword) {
            res.json({ status: 'ok', message: 'Logged in' });
        } else {
            res.json({ status: 'error', message: 'Invalid email or password' });
        }
    })
    
// ###################################### PUBLISH PROMPT ######################################

app.post('/publish', async (req,res) => {
    try{
        const data = req.body;
        await Prompt.create({
            id: data.id,
            prompt: data.prompt,
            tags: data.tags
        })
        res.json({status: 'ok', message: 'Your prompt has been published'})
    }catch(err){
        res.json({status: 'error', message: 'An error occured'})
    }
})
    

app.listen(3030, () => console.log("Server running on port 3030"));