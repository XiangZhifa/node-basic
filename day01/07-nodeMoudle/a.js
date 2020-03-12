/**
 * require 是一个方法
 * 作用就是加载模块
 * 在 node 中,模块有三种:
 *      具名核心模块,例如: fs , http ......
 *      用户自己编写的文件模块
 *      相对路径必须加 ./
 * 在 node 中,没有全局作用域,只有模块作用域
 **/
console.log('a start');

require('./b');

console.log('a end');
