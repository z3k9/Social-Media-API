const http = require('http');
const app = require('./app');
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const cluster = require('cluster');
const os = require('os');
const { connectDb } = require('./services/mongo');


async function start(){
    await connectDb();
    
    server.listen(PORT, (req,res)=>{
        console.log(`Server is listening on port: ${PORT}`);
    });
}

if(cluster.isMaster){
    console.log('Master has started');
    const NUM_OF_WORKERS = os.cpus().length;
    for( let i = 0; i< NUM_OF_WORKERS; i++){
        cluster.fork();
    }
}
else{
    console.log('Worker process has started');
    start();
}