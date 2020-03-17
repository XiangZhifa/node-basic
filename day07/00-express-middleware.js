const express = require('express');
const app = express();

//当收到请求，会从第一个中间件进行匹配，如果匹配会进入中间件，执行到next，才会继续向下一个中间件进行匹配

//中间件是用来处理请求的，本质上是函数
//在Express中对中间件有几种分类

//1.不关心请求路径和请求方法的中间件，也就是说任何请求都会进入这个中间件
app.use((req,res)=>{
    console.log('接收到了请求！');
});

//中间件本身是一个方法，接收3个参数：
// req,请求对象     res,响应对象    next,下一个中间件
app.use((req,res,next)=>{
    console.log('接收到了请求1！');
    //next是一个方法，用来调用下一个中间件
    next();
});

app.use((req,res,next)=>{
    console.log('接收到了请求2！');
    next();
});

app.use((req,res,next)=>{
    console.log('接收到了请求3！END!');
});

//2.关心请求路径的中间件
app.use('/a',(req,res,next)=>{
    //所有以 /a 开头的请求，都会进入此中间件
    console.log(req.url);
});

//3.严格匹配请求方法和请求路径的中间件
//app.get  app.post

app.listen(8080, () => {
    console.log('app is running at http://localhost:8080/');
});