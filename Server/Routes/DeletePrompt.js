const express = require('express');
const bodyParser = require('body-parser');
const Prompt = require('../Models/Prompt');
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
        var ind = -1;
        for(var i=0;i<user.posts.length;i++){
            if(user.posts[i] == id){
                ind = i;
                break;
            }
        }
        if(ind==-1){
            return res.json({status: 'error', message:'post not found'});
        }else{
            user.posts.splice(ind,1);
        }
        Prompt.deleteOne({ id: id }).then(function(){
            return res.json({status: 'ok', message:'Prompt Deleted Successfully'})
            console.log("Data deleted"); // Success
        }).catch(function(error){
            console.log(error); // Failure
        });

    }
    catch(err){
        console.log(err);
        res.json({status: 'error', message: 'Internal Error'});
    }
})

module.exports = router;