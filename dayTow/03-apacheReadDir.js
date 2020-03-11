const http = require('http');
const fs = require('fs');
const wwwDir = 'E:/Personal/app/www/';

const server = http.createServer();

server.on('request', (req, res) => {
    const url = req.url;
    let filePath = '/';
    if (url === '/') {
        fs.readFile('./template/template.html', (err, data) => {
            if (err) {
                res.end('404 Not Found.');
                return;
            }
            fs.readdir(wwwDir, (err, files) => {
                if (err) {
                    res.end('Can not find www dir');
                    return;
                }
                let content = '';
                files.forEach(item => {
                    content += `
                    <tr>
                        <td data-value="index.html">
                            <a class="icon file" draggable="true" href="/${item}">${item}</a>
                        </td>
                        <td class="detailsColumn" data-value="171">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td class="detailsColumn" data-value="1583870964">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    </tr>
                `
                });
                data = data.toString();
                data = data.replace('@_@', content);
                res.end(data);
            });
        });
        return;
    }
    if (url !== '/') {
        filePath = url
    }
    fs.readFile(wwwDir + filePath, (err, data) => {
        if (err) {
            res.end('404 Not Found.');
            return;
        }
        res.end(data);
    })
});

server.listen(8888, () => {
    console.log('正在监听:http://localhost:8888/');
});