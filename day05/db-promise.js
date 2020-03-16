const mongoose = require('mongoose');
//1.连接数据库
//连接的数据库不一定需要存在，当你插入第一条数据之后，数据库会被自动创建
mongoose.connect('mongodb://122.51.65.109:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

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

//Promise查询所有
User.find().then(data => console.log(data)).catch(err => console.error(err));

//Promise用户注册场景
User.findOne({userName: 'admin'}).then(data => {
    if (!data) {
        return new User({
            userName: 'admin',
            passWord: '123456',
            phone: '13245678901'
        }).save();
    }
    console.log('用户已存在，无法注册！');
}).then(data => {
    console.log('用户注册成功！', data);
}).catch(err => {
    console.error(err);
});