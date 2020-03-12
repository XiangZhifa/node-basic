const express = require('express');
const bodyParser = require('body-parser');

//用 express 创建服务
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//当服务器收到get请求'/'时，执行回调处理函数
app.get('/',(req,res)=>{
    res.send('welcome to express-demo');
});

app.get('/sendComments',(req,res)=>{
    console.log(req.query);
    //express返回获取到的数据
    // res.send('接收到的信息为：'+JSON.stringify(req.query));

    //express重定向
    res.redirect('/');
});

//post请求方法
app.post('/sendComments',(req,res)=>{
    //配置body-parser之后,可以通过req.body来获取post请求的数据
    res.send('post请求收到的参数为：'+JSON.stringify(req.body))
});

app.listen(8888,()=>{
    console.log('app is running at http://localhost:8888/');
});
