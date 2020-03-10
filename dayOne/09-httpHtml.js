const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request',(req,res)=>{
    const url = req.url;
    if(url==='/'){
        fs.readFile('./resource/index.html',(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败,请稍后重试！');
                return;
            }
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end(data.toString());
        })
    }else if(url==='/messi'){
        fs.readFile('./resource/Messi.jpg',(err,data)=>{
            if(err){
                res.setHeader('Content-Type','text/plain;charset=utf-8');
                res.end('文件读取失败,请稍后重试！');
                return;
            }
            res.setHeader('Content-Type','image/jpeg');
            res.end(data);
        })
    }
});

server.listen(8888, () => {
    console.log('正在监听:http://localhost:8888/');
});