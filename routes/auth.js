const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// register
router.post('/register',async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await new User({
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
        loginType: req.body.loginType
    });
    try {
        await newUser.save();
        res.status(200).json("Successfully registered the new user");
    } catch (err) {
        console.log(err);
    }
})

// login 
router.post('/login',async (req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username});
        if(!user){
            console.log("User not found");
        }
        else{
            const validPass = bcrypt.compare(req.body.password, user.password);
            if(validPass){
                res.status(200).json("Successfully logged in");
            }
            else{
                res.status(400).json("Invalid Password : Authorization revoked");
            }
        }
    } catch(err){
        console.log(err);
    }
});

module.exports = router;