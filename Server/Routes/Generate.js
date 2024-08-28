const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.use(express.json());

router.post('/',async(req,res)=>{
    try{
        const prompt = req.body.prompt;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        const result = await model.generateContent(`I will be giving you a prompt and you have to rate it on the scale of 0 to 10, just give the rating and in one line suggest improvement that can be made....... Prompt: "${prompt}"`);
        res.json({status: 'ok', message: result})
    }catch(err){
        console.log(err);
        res.json({status: 'error', message: 'Some Error'});
    }
})

module.exports = router;

