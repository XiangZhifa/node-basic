/**
 * 用 node.js 构建 web 服务器
 * node 中提供了核心模块 http 来进行服务器相关构建
 * */
let http  = require('http');

/**
 * 使用http.createServer(),可以创建服务器,会返回server实例
 * **/
let server = http.createServer();


/**
 * 服务器接受请求,处理请求,
 * 客户端发送请求,触发服务器 request 请求事件
 * **/
server.on('request',()=>{
    console.log('收到请求！')
});

/**
 *绑定端口号,启动服务器
 **/
server.listen(8888,()=>{
    console.log('正在监听: http://localhost:8888/');
});
