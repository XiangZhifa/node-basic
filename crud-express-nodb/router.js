//引入express.Router
const express = require('express');
//创建一个路由容器
const router = express.Router();
//引入数据操作文件
const dbOpreation = require('./player.js');
//将路由挂载到路由容器上
router.get('/getPlayers', (req, res) => {
    dbOpreation.findPlayers().then(data => {
        res.status(200).send({success: true, data: data, msg: '查询数据成功!'});
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.get('/getPlayerById', (req, res) => {
    dbOpreation.findPlayerById(req.query.id).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.post('/addPlayer', (req, res) => {
    dbOpreation.addPlayer(req.body).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send({success: false, msg: err});
    });
});

router.post('/editPlayer', (req, res) => {
    dbOpreation.editPlayerById(req.body).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

router.post('/deletePlayer', (req, res) => {
    dbOpreation.deletePlayerById(req.body.id).then(data => {
        res.status(200).send(data);
    }).catch(err => {
        res.status(500).send(err);
    });
});

//导出router
module.exports = router;
