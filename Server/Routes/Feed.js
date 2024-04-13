const express = require('express');
const bodyParser = require('body-parser');
const Prompt = require('../Models/Prompt');
const authenticateToken = require('../auth');
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/prompts',authenticateToken, async (req,res) => {
    try{
        const prompts = await Prompt.find();
        res.json({status: 'ok', prompts:prompts});
    }
    catch(err){
        res.json({status: 'error', message: 'Error 404'});
    }
})

router.post('/search', async (req,res)=>{
    try{
        const tag = req.body.tag;
        const prompts = await Prompt.find();
        if(tag.length === 0){
            return res.json({status: 'ok', result: prompts});
        }
        const result = [];
        for(var i=0; i<prompts.length; i++){
            if(prompts[i].tags.indexOf(tag)!==-1)
                result.push(prompts[i]);
        }
        return res.json({status: 'ok', result: result});
    }catch(err){
        console.log(err);
        res.json({status: 'error', message: 'Internal Error'});
    }
})

module.exports = router;