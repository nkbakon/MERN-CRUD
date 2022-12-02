const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

//Save Posts

router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);
    
    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully"
        });
    });
});

module.exports = router;