const mongoose = require('mongoose');
mongoose.connect('mongodb://122.51.65.109:27017/crudPlayers', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;
const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: Number,
        enum: [0, 1],
        default: 0,
        required: true,
    },
    hobby: String,
});

module.exports = mongoose.model('Player', playerSchema);

