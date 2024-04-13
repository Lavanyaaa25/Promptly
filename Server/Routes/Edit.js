const express = require('express');
const bodyParser = require('body-parser');
const authenticateToken = require('../auth');
const Prompt = require('../Models/Prompt');
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));

router.post('/', authenticateToken, async (req,res) => {
    try{
        const id = req.body.id;
        const newPrompt = req.body.prompt;
        const tags = req.body.tags;
        await Prompt.findOneAndUpdate({id: id}, {prompt: newPrompt, tags: tags});
        res.json({status: 'ok',message: 'Prompt Updated Successfully'});
    }
    catch(err){
        console.log(err);
        res.json({status: 'error', message: 'Internal Error'});
    }
})

module.exports = router;