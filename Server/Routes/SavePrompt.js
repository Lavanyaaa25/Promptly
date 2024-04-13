const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../auth');
const User = require('../Models/User');
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/:id', authenticateToken, async (req,res) => {
    try{
        const id = req.params.id;
        const token = req.headers['access-token'];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findOne({username: decoded.username});
        if(!user){
            return res.json({status: 'error', message: 'User not Registered'});
        }
        if(user.saved.indexOf(id) === -1)
            user.saved.push(id);
        // console.log(user);
        await user.save();
        res.json({status: 'ok', message: 'Prompt Saved Successfully'});
    }
    catch(err){
        console.log(err);
        res.json({status: 'error', message: 'Internal Error'});
    }
})

router.get('/unsave/:id', authenticateToken, async (req,res) => {
    try{
        const id = req.params.id;
        const token = req.headers['access-token'];
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findOne({username: decoded.username});
        if(!user){
            return res.json({status: 'error', message: 'User not Registered'});
        }
        if(user.saved.indexOf(id)!==-1)
        user.saved.splice(user.saved.indexOf(id),1);
        // console.log(user);
        await user.save();
        res.json({status: 'ok', message: 'Prompt Unsaved Successfully'});
    }
    catch(err){
        console.log(err);
        res.json({status: 'error', message: 'Internal Error'});
    }
})

module.exports = router;