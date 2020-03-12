const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

//用 express 创建服务
const app = express();

//配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.get('/getPlayers', (req, res) => {
    //readFile的第二个参数可选，传入utf8，按照utf8格式编码
    //也可以用data.toString()方法实现utf8的效果
    fs.readFile('./database.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({success: false, msg: '查询数据失败！'})
        }
        return res.status(200).send({success: true, data: JSON.parse(data).players, msg: '查询数据成功！'})
    });
});

app.listen(8888, () => {
    console.log('app is running at http://localhost:8888/');
});
