/**
 * fs 是 node.js 的核心模块 fileSystem
 * fs包含了所有文件操作相关的api
 * 例如：read File
 * */
let fs = require('fs');

/**
 *三个参数
 *path:要读取的文件路径
 *callBack:回调函数
 * **/
fs.readFile('./00-helloWorld.js', (err, data) => {
    //会返回十六进制数据,用toString转为文字
    err ? console.error(err) : console.log(data.toString());
});
