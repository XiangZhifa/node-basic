const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
    //设置utf-8,解决中文乱码
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('欢迎学习node.js');
});

server.listen(8888, () => {
    console.log('正在监听:http://localhost:8888/');
});