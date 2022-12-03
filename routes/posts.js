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

//Get Posts

router.get('/posts',(req,res) => {
    Posts.find().exec((err,posts) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//Update Posts

router.put('/post/update/:id',(req,res) => {
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//Delete Posts

router.delete('/post/delete/:id',(req,res) => {
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) => {
        message:"Delete unsuccessful"
    });
    return res.json({
        message:"Delete successful",deletedPost
    });
});

module.exports = router;

//Get a specific post

router.get('/post/:id',(req,res) => {
    let postId = req.params.id;
    
    Posts.findById(postId,(err,post) => {
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});