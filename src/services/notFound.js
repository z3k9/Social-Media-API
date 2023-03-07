function notFound (req,res){
    res.status(404).send('The page you are looking for does not exist');
}


module.exports = notFound;