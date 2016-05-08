const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/count');

const count_model = require('../model/Count');
const counter = new count_model.counter();

exports.fetch = function() {
  return new Promise(function(resolve, reject) {
    count_model.counter.findOne({}, function(err, counter) {
      if (!err) {
        resolve(counter.num + '');
      } else {
        reject(err);
      }
    });
  });
}

exports.countUp = function() {
  return new Promise(function(resolve, reject) {
    count_model.counter.findOne({}, function(err, result) {
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
