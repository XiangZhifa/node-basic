let http  = require('http');

let server = http.createServer();

server.on('request',(req,res)=>{
    //res.end 的同时,发送响应数据
    // res.end('Server Got It!');

    //根据不同的请求路径发送响应结果
    let url = req.url;
    if(url==='/'){
        res.end('Index Page');
    }else if(url==='/login'){
        res.end('Login Page');
    }else if(url==='/product'){
        const product = [
            {name:'苹果',price:10},
            {name:'草莓',price:15},
            {name:'车厘子',price:20},
        ];
        //响应内容只！能！是！字符串 或者 二进制数据！
        res.end(JSON.stringify(product));
    }else{
        res.end('404 Not Found');
    }
});

server.listen(8888, () => {
    console.log('正在监听: http://localhost:8888/');
});