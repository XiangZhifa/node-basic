const mongoose = require('mongoose');
//mongoose连接mongoDB
mongoose.connect('mongodb://122.51.65.109:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

//设计表数据结构
//mongoose.model(表名, 数据结构);
const Player = mongoose.model('Player', {name: String});

const sevenSir = new Player({name: 'clearLoveSeven'});
sevenSir.save().then(() => console.log('7777777')).catch(err => console.log(err));