(function () {
  'use strict';
  module.exports = {
    init: init
  };
  var mongoose = require('mongoose');
  function init() {
    var mongodbConfig = require('../../config/mongodb/mongodb-config').mongodb;
    var options = {
      promiseLibrary: require('bluebird'),
      useNewUrlParser: true
    };
    var connectionString = prepareConnectionString(mongodbConfig);
    mongoose.connect(connectionString, options).then(function (result) {
      console.log("MongoDB connection successful. DB: " + connectionString);
    }).catch(function (error) {
      console.log(error.message);
      console.log("Error occurred while connecting to DB: : " + connectionString);
    });
  }
  function prepareConnectionString(config) {
    var connectionString = 'mongodb://';
    if (config.user) {
      connectionString += configuser + ':' + config.password + '@';
    }
    connectionString += config.server + '/' + config.database;
    return connectionString;
  }
})();