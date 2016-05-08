const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountSchema = new Schema({
  num: {type: Number, required: true}
});

exports.counter = mongoose.model('Counter', CountSchema);
