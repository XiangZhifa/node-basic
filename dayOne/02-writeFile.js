let fs  = require('fs');

/**
 * 第一个参数：要写入的文件路径
 * 第二个参数：要写入的文件内容
 * 第三个参数：回调函数
 * **/
fs.writeFile('./data/wirteData.txt','Hello Node.js',(err)=>{
    err ? console.error(err) : console.log('文件写入成功！');
});