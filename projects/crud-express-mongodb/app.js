const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router.js');

//用 express 创建服务
const app = express();

//配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

//把路由挂载到app服务上
app.use(router);

app.listen(8888, () => {
    console.log('app is running at http://localhost:8888/');
});
