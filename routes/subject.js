const router = require('express').Router();
const Subject = require('../models/Subject');

// create a new subject
router.post('/',async (req,res)=>{
    const newSubject = await new Subject({
        name: req.body.name,
        id: req.body.id
    });
    try {
        await newSubject.save();
        res.status(200).json("Successfully registered the subject");
    } catch (err) {
        console.log(err);
    }
});

// get a subject
router.get('/:id', async(req,res)=>{
    try{
        const subject = await Subject.findById(req.params.id);
        res.status(200).json(subject);
    } catch(err){
        console.log(err);
    }
});

module.exports = router;