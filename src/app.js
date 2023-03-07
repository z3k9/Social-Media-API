const express = require('express');
const app = express();
const notFound = require('./services/notfound');
// const v1 = require('./routes/v1');
require('dotenv').config();

app.use(express.json());


app.get('/', (req,res)=>{
    res.send('Social media API');
});

// app.use('/api/v1', v1);
app.use(notFound);



module.exports = app;