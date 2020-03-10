let http = require('http');

let server = http.createServer();

/**
 *resquest 请求处理函数,需要两个参数
 * Resquest 请求对象
 *      请求对象可以获取客户端的一些信息,例如:请求路径 等
 * Response 响应对象
 *      响应对象可以给客户端返回响应信息
 **/
server.on('request', (req,res) => {
    console.log('请求路径是:'+req.url);
    //Response对象的 write 方法可以给客户端发送响应数据
    //write可以使用多次,但是最后一定要用 end 来结束响应,否则客户端会一直等待
    res.write('Server Got It!');
    res.end();
});

server.listen(8888, () => {
    console.log('正在监听: http://localhost:8888/');
});
