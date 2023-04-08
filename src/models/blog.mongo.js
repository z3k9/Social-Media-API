const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type :String,
        required: [true, 'Please provide blog title'],
        maxLength : 100
    },
    description : {
        type: String,
        required: [true, 'Please provide a blog description'],
        minLength: 60
    }, 
    image: {
        type: String, 
        required: true
    }, 
    createdBy :{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide author']
    }
}, {timestamps: true});

module.exports = mongoose.model('Blog', blogSchema);