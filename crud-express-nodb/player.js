const fs = require('fs');

//数据操作模块，只处理数据，不关心业务
exports.findPlayers = () => new Promise((resolve, reject) => {
    //readFile的第二个参数可选，传入utf8，按照utf8格式编码
    //也可以用data.toString()方法实现utf8的效果
    fs.readFile('./database/database.json', 'utf8', (err, data) => {
        if (err) {
            reject(err);
        }
        resolve(JSON.parse(data).players);
    });
});

exports.addPlayer = (newStu) => {
    return this.findPlayers().then(data => new Promise((resolve, reject) => {
        data.push(Object.assign({id: 'LPL00' + (+data.length + 1)}, newStu));
        fs.writeFile('./database/database.json', JSON.stringify({players: data}), (err) => {
            if (err) {
                reject(err);
            }
            resolve({success: true, msg: '新增数据成功!'})
        });
    })).catch(err => {
        return err;
    });
};

exports.editPlayer = () => {

};

exports.deletePlayer = () => {

};