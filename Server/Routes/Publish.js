const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Prompt = require('../Models/Prompt');
const User = require('../Models/User');
const authenticateToken = require('../auth');
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/',authenticateToken, async (req,res) => {
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

module.exports = router;