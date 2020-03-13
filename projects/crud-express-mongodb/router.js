//引入express.Router
const express = require('express');
//创建一个路由容器
const router = express.Router();
//引入数据操作文件
const Player = require('./player.js');

//将路由挂载到路由容器上
router.get('/getPlayers', (req, res) => {
    Player.find((err, data) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({success:true,data:data,msg:'查询成功！'});
    })
});

router.get('/getPlayerById', (req, res) => {
    Player.findOne(req.query, (err, data) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({success: true, data: data, msg: '查询成功！'});
    })
});

router.post('/addPlayer', (req, res) => {
    new Player(req.body).save((err,data)=>{
        if(err) return res.status(500).send(err);
        res.status(200).send({success: true, msg: '新增成功！'});
    });
});

router.post('/editPlayer', (req, res) => {
    Player.findByIdAndUpdate(req.body.id,req.body , (err, data) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({success: true, msg: '更新数据成功！'});
    });
});

router.post('/deletePlayer', (req, res) => {
    Player.deleteOne(req.body, (err) => {
        if (err) return res.status(500).send(err);
        res.status(200).send({success: true, msg: '删除成功！'});
    });
});

//导出router
module.exports = router;
