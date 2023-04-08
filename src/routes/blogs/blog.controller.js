const Blog = require('../../models/blog.mongo');


async function getAllBlogs(req,res){
    const blogs = await Blog.find({createdBy: req.user._id}).sort('createdAt');
    res.status(200).json({blogs, count: blogs.length});
}

async function getABlog(req,res){
    const blog = await Blog.findOne({_id: req.params.id, createdBy: req.user_id});
    if(!blog){
        res.status(404).json({msg: 'This blog does not exist'});
    }
    res.status(200).json({blog});
}

async function createABlog(req,res){
    req.body.createdBy = req.user._id;
    const blog = await Blog.create({...req.body});
    res.status(200).json({blog});
}

async function updateABlog(req,res){
    const {
        body: {title, description},
        user: {_id}, 
        params : {id: blogId}
    } = req;
    if(title === "" || description === ""){
        return res.status(401).json({msg: 'You need to provide appropriate title and description'});
    }
    const blog = await Blog.findByIdAndUpdate({_id: blogId, createdBy: _id}, req.body, ({new: true, runValidators: true}));
    if(!blog){
        res.status(404).json({msg: 'No blog exists with that id'});
    }
    res.status(200).json({blog});
}

async function deleteABlog(req,res){
    const { user: {_id}, params: {id: blogId}} = req; 
    const blog = await Blog.findOneAndRemove({id: blogId, createdBy: _id});
    if(!blog){
        return res.status(404).json({msg: 'Blog does not exist'});
    }
    res.status(201).json({msg: 'Blog deleted successfully'});
}

module.exports = {deleteABlog, updateABlog, createABlog, getABlog, getAllBlogs};