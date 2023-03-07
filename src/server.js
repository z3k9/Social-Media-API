const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
// const cluster = require('cluster');
// const os = require('os');
const { connectDb } = require('./services/mongo');


async function start(){
    await connectDb();
    
    server.listen(PORT, (req,res)=>{
        console.log(`Server is listening on port: ${PORT}`);
    });
}

start();
