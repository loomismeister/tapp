var expect  = require('chai').expect;

describe("TingoDB", function() {
  it("should connect to the embedded db", function(next) {
    var tungus    = require('tungus');
    var mongoose  = require('mongoose');

    mongoose.connect('tingodb://' + __dirname + '/data', function(err, db) {
        expect(err).to.not.exist;
        next();
    });
  });
});
