const router = require('express').Router();
const User = require('../models/User');
const Subject = require('../models/Subject');

// get a student
router.get('/:id', async (req, res) => {
    if (req.body.id === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    else {
        console.log("Unauthorized access");
    }
});

// add a subject to a student
router.put('/:id/addsubject',async (req, res) => {
    if (req.params.id === req.body.id) {
        try {
            await User.findByIdAndUpdate(req.body.id, {$push  : {subjects: req.body.subjectid}});
            res.status(200).json("Succesfully enrolled in the subject");
        } catch (err) {
            console.log(err);
        }
    }
    else {
        console.log("Unautorized access");
    }
});

// get all the subjects of the student
router.get('/:id/showsubjects', async (req,res)=>{
    if (req.params.id === req.body.id) {
        try {
           const user = await User.findById(req.params.id);
           res.status(200).json(user.subjects);
        } catch (err) {
            console.log(err);
        }
    }
    else {
        console.log("Unautorized access");
    }
});

module.exports = router;
