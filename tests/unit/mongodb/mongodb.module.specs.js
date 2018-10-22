var chai = require('chai');
var expect = chai.expect;
var MongoDBModule = require('../../../modules/mongodb/mongodb.module');
var MongoDBUtil = require('../../../modules/mongodb/mongodb.module').MongoDBUtil;

describe('MongoDBModule', function() {
  describe('mongodb.module file', function() {
    it('should read the mongodb module file', function() {
      expect(MongoDBModule).to.be.a('object');
    });
    it('should confirm MongoDBUtil exist', function() {
      expect(MongoDBUtil).to.be.a('object');
    });
  });
});
