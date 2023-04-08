const express = require('express');
const app = express();
const notFound = require('./services/notfound');
const v1 = require('./routes/v1');
require('dotenv').config();
// Security packages
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const rateLimiter = require('express-rate-limit');

app.set('trust proxy', 1);
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, //15 mins
    max: 100 // Rate limit each IP to 100 requests per 15mins 
}));
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.get('/', (req,res)=>{
    res.send('Social media API');
});

app.use('/api/v1', v1);

app.use(notFound);


module.exports = app;