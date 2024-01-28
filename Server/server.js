require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const User = require('./Models/User');
const Prompt = require('./Models/Prompt');
const bcrypt = require('bcryptjs');
const authenticateToken = require('./auth');
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
        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: newPassword,
            posts:[],
            saved:[]
        })
        const token =  jwt.sign(
            {
                username: user.username,
                email: user.email,
                posts: user.posts,
                saved: user.saved
            },
            process.env.ACCESS_TOKEN_SECRET
        );
        res.json({ status: 'ok', message: 'Registered', user: token });
    } catch (err) {
        console.log(err);
        res.json({ status: 'error', message: 'Duplicate email or username', user: false })
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
            const token =  jwt.sign(
                {
                    username: test.username,
                    email: test.email,
                    posts: test.posts,
                    saved: test.saved
                },
                process.env.ACCESS_TOKEN_SECRET
            );
            res.json({ status: 'ok', message: 'Logged in', user: token });
        } else {
            res.json({ status: 'error', message: 'Invalid email or password' });
        }
    })
    
// ###################################### PUBLISH PROMPT ######################################

app.post('/publish',authenticateToken, async (req,res) => {
    try{
        const data = req.body;
        const token = req.headers['access-token'];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const prompt = await Prompt.create({
            id: data.id,
            username: decoded.username,
            prompt: data.prompt,
            tags: data.tags
        })
        const user = await User.findOne({username: decoded.username});
        if(!user){
            return res.json({status: 'error', message: 'User not Registered'});
        }
        user.posts.push(prompt.id);
        console.log(user);
        await user.save();
        res.json({status: 'ok', message: 'Your prompt has been published'})
    }catch(err){
        res.json({status: 'error', message: 'An error occured'})
    }
})

// ###################################### USER'S PROFILE ######################################

app.post('/users/profile',authenticateToken, async (req, res) => {
    try{
        const username = req.body.userName;
        const user = await User.findOne({username: username})
        const prompts=[];
        for(var i=0;i<user.posts.length;i++){
            const prompt = await Prompt.findOne({id: user.posts[i]});
            prompts.push(prompt);
        }
        if(user)
            res.json({status: 'ok', user: user, prompts: prompts});
        else
            res.json({status: 'error'});
    }catch(err){
        res.json({status: 'error', message: 'Invalid username'});
    }
})

// ###################################### INITIAL FEED ######################################

app.get('/prompts',authenticateToken, async (req,res) => {
    try{
        const prompts = await Prompt.find();
        res.json({status: 'ok', prompts:prompts});
    }
    catch(err){
        res.json({status: 'error', message: 'Error 404'});
    }
})

// ###################################### GET LOGGED IN USER ######################################

app.get('/getUser', authenticateToken, async (req,res) => {
    try{
        const token = req.headers['access-token'];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        res.json({status: 'ok', username: decoded.username});
    }
    catch(err){
        console.log(err);
        res.json({status: 'error', message: 'Internal Error'});
    }
})

app.listen(3030, () => console.log("Server running on port 3030"));