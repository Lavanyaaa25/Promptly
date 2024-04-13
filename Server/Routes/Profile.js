const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Prompt = require('../Models/Prompt');
const User = require('../Models/User');
const authenticateToken = require('../auth');
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/profile',authenticateToken, async (req, res) => {
    try{
        const username = req.body.userName;
        const user = await User.findOne({username: username})
        if(!user){
            return res.json({status: 'error'});
        }
        const token = req.headers['access-token'];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const auth_user = await User.findOne({username: decoded.username});
        if(auth_user.username === user.username){
            const prompts=[];
            const saved=[];
            for(var i=0;i<user.posts.length;i++){
                const prompt = await Prompt.findOne({id: user.posts[i]});
                if(prompt != null)
                prompts.push(prompt);
            }
            for(var i=0;i<user.saved.length;i++){
                const prompt = await Prompt.findOne({id: user.saved[i]});
                if(prompt != null)
                saved.push(prompt);
            }
            // console.log(prompts);
            if(user)
                res.json({status: 'ok', user: user, prompts: prompts, saved: saved, auth: true, auth_username: auth_user.username});
            else
                res.json({status: 'error'});
        }else{
            const prompts=[];
            for(var i=0;i<user.posts.length;i++){
                const prompt = await Prompt.findOne({id: user.posts[i]});
                if(prompt != null)
                prompts.push(prompt);
            }
            if(user)
                res.json({status: 'ok', user: user, prompts: prompts, auth: false, auth_username: auth_user.username});
            else
                res.json({status: 'error'});
        }
    }catch(err){
        res.json({status: 'error', message: 'Invalid username'});
    }
})

router.get('/getUser', authenticateToken, async (req,res) => {
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

module.exports = router;