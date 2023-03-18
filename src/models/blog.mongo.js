const mongoose = require('mongoose');

const Blog = new mongoose.Schema({
    title: {
        type :String,
        required: true,
        

    }
})