const User = require('../../models/user.mongo');

async function login(req,res){
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).json({msg : "Please provide a valid email and password"});
    }
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({msg : "User does not exist"});
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        return res.status(401).json({msg: "Please provide correct password details"});
    }
    const token = user.createJWT();
    return res.status(200).json({user : {user: user.name}, token});
}

async function register(req,res){
    try{
        const user = await User.create({...req.body});
        const token = user.createJWT();
        res.status(201).json({ user: {name : user.name, email: user.email}, token});
        console.log(user);
    }
    catch(error){
        res.status(500).json({ msg : error});
    }
} 

module.exports = {login, register};