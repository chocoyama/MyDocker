const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://mongo/count');

const schema = new mongoose.Schema({
  num: {type: Number}
});
const Counter = connection.model('Counter', schema);
const counter = new Counter(); // newし直すと更新されなくなる

process.on('SIGINT', function() { mongoose.disconnect(); });

exports.fetch = function() {
  return new Promise(function(resolve, reject) {
    Counter.findOne({}, function(err, result) {
      if (!err) {
        resolve(result.num + '');
      } else {
        reject(err);
      }
    });
  });
}

exports.countUp = function() {
  return new Promise(function(resolve, reject) {
    Counter.findOne({}, function(err, result) {
      if (err) {
        reject(err);
        return;
      }

      const num = (result) ? result.num : 0;
      counter.num = num + 1;
      counter.save(function(err) {
        if (!err) {
          resolve('success');
        } else {
          reject(err);
        }
      });
    });
  });
}
