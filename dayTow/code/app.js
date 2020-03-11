const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        const url = req.url;
        if (url === '/') {
            fs.readFile('./views/index.html', (err, data) => {
                if (err) {
                    res.end('404 Not Found.');
                    return;
                }
                res.end(data);
            });
        }
    })
    .listen(8888, () => {
        console.log('正在监听:http://localhost:8888/');
    });