const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.use(express.json());
router.use(bodyParser.urlencoded({extended: true}));


router.post('/register', async (req,res) => {
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

router.post('/login', async (req,res) => {
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

module.exports = router;
