/**
 * node 为 js 提供了许多服务器端模块,这些模块都被封装在 node 的核心模块中
 * 例如, 文件操作相关 fs, http服务构建相关 http, 路径操作相关 path, 操作系统信息模块 os ......
 **/

//使用核心模块,必须用 require 引入,例如:
const os = require('os');
//用来操作路径
const path = require('path');

//获取当前机器的CPU信息
console.log(os.cpus());
//获取当前机器内存
console.log(os.totalmem());

//获取当前路径下文件的拓展名
console.log(path.extname('./data/writeData.txt'));
