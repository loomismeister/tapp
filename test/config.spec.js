var request = require('supertest')
  , expect = require('chai').expect;

describe("Configuration setup", function() {
    it("should load local configurations", function(next) {
        var config = require('../config')();
        expect(config.mode).to.be.equal('local');
        next();
    });
    it("should load staging configurations", function(next) {
        var config = require('../config')('staging');
        expect(config.mode).to.be.equal('staging');
        next();
    });
    it("should load production configurations", function(next) {
        var config = require('../config')('production');
        expect(config.mode).to.be.equal('production');
        next();
    });
});
