const http = require('http');
const fs = require('fs');
const wwwDir = 'E:/Personal/app/www';

const server = http.createServer();

server.on('request',(req,res)=>{
    const url = req.url;
    let filePath = '/index.html';
    if(url!=='/'){
        filePath = url
    }
    fs.readFile(wwwDir+filePath,(err,data)=>{
        if(err){
            res.end('404 Not Found.');
            return;
        }
        res.end(data);
    })
});

server.listen(8888, () => {
    console.log('正在监听:http://localhost:8888/');
});