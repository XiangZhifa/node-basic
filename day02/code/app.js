const http = require('http');
const fs = require('fs');
const url = require('url');

let comments = [{
    name: '张三1',
    message: '今天天气真好！',
    date: new Date().toLocaleString()
}, {
    name: '张三2',
    message: '今天天气真好！',
    date: new Date().toLocaleString()
}, {
    name: '张三3',
    message: '今天天气真好！',
    date: new Date().toLocaleString()
}];

http
    .createServer((req, res) => {
        let parseObj = url.parse(req.url,true);
        let urlName = parseObj.pathname;
        if (urlName === '/') {
            fs.readFile('./views/index.html', (err, data) => {
                if (err) {
                    return fs.readFile('./views/404.html', (err, data) => {
                        res.end(data);
                    });
                }
                let content = '';
                comments.forEach(item => {
                    content += `<div class="card">${item.name}说：${item.message}<span class="dateRight">${item.date}</span></div>`
                });
                data = data.toString();
                data = data.replace('_$Content', content);
                res.end(data);
            });
        } else if (urlName === '/post') {
            fs.readFile('./views/post.html', (err, data) => {
                if (err) {
                    return fs.readFile('./views/404.html', (err, data) => {
                        res.end(data);
                    });
                }
                res.end(data);
            });
        } else if (urlName === '/sendMessage') {
            comments.push(Object.assign(parseObj.query,{date: new Date().toLocaleString()}));
            //后端重定向
            res.statusCode = 302;
            res.setHeader('Location','/');
            res.end();
        } else {
            fs.readFile('./views/404.html', (err, data) => {
                res.end(data);
            });
        }
    })
    .listen(8888, () => {
        console.log('正在监听:http://localhost:8888/');
    });