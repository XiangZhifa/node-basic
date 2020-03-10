const http = require('http');
const fs = require('fs');
const wwwDir = 'E:/Personal/app/www';

const server = http.createServer();

server.on('request',(req,res)=>{
    const url = req.url;
    if(url==='/'){
        fs.readFile(wwwDir+'/index.html',(err,data)=>{
            if(err){
                res.end('404 Not Found.');
                return;
            }
            res.end(data);
        })
    }else if(url==='/a.txt'){
        fs.readFile(wwwDir+'/a.txt',(err,data)=>{
            if(err){
                res.end('404 Not Found.');
                return;
            }
            res.end(data);
        })
    }else {
        res.end('404 Not Found.');
    }
});

server.listen(8888, () => {
    console.log('正在监听:http://localhost:8888/');
});