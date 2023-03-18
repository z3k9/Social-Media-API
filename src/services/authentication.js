const User = require('./../models/user.mongo');
const jwt = require('jsonwebtoken');


async function authenticationMiddleware(req,res,next){
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(401).json({msg : 'Token not provided'});
    }
    const token = authHeader.split(' ')[1];

    try{
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        const user = User.findById(payload.userId).select('-password');
        req.user = user;
    }
    catch(err){
        res.status(401).json({msg: 'no access to this route'});
        console.error(err);
    }
}
