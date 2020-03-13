const mongoose = require('mongoose');
//1.连接数据库
//连接的数据库不一定需要存在，当你插入第一条数据之后，数据库会被自动创建
mongoose.connect('mongodb://122.51.65.109:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false)

//2.设计集合的数据结构
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,  //必须有,不能为空
    },
    passWord: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    }
});

//3.将设计好的数据结构发布为模型，以供使用
//mongoose.model用来将一个数据结构发布为model(模型)
//第一个参数：传入一个单数名词大写字符串，用来表示你的集合名称，mongoose会自动将大写名称，生成为小写复数名称
//第二个参数：数据结构的schema
//返回值：模型构造函数
const User = mongoose.model('User', userSchema);

//4.根据模型构造函数，进行增删改查操作\
let admin = new User({
    userName: 'admin',
    passWord: '123456',
    phone: '13245678901'
});

//调用save函数，增！
/*
admin.save((err,res)=>{
    if(err){
        return console.log('数据保存失败！');
    }
    console.log(res);
    console.log('数据保存成功！');
});
*/

//调用find函数，查！
//查询所有
/*
User.find((err,res)=>{
    if(err){
        return console.log('查询失败！');
    }
    console.log(res);
    console.log('查询成功！');
});
*/
//按条件查询
//find，一定会返回数组；findOne，返回找到的第一个对象
/*
User.find({userName: 'admin'}, (err, res) => {
    if (err) {
        return console.log('查询失败！');
    }
    console.log(res);
    console.log('查询成功！');
});
*/

//调用deleting函数，进行删除
// 单条删除
/*
User.deleteOne({phone: '13245678901'}, function (err) {
    if (err) return console.log('删除失败！');
    console.log('删除成功！')
});
*/
//批量删除
/*
User.deleteMany({phone: '13245678901'}, function (err) {
    if (err) return console.log('删除失败！');
    console.log('删除成功！')
});
*/

//调用updateOne函数，更新！
User.findByIdAndUpdate('5e6bab2cd0097d1fb897eeb0', {passWord: 'admin@123456'}, (err, res) => {
    if (err) return console.log('更新数据失败！');
    console.log('更新数据成功！');
});
