var request = require('supertest')
  , expect = require('chai').expect;

var Model = require("../models/Base"),
  dbMockup = {};

describe("Models", function(){
  it("should create a new model", function(next){
    var model = new Model(dbMockup);
    expect(model.db).to.exist;
    expect(model.extend).to.exist;
    next();
  });
  it("should be extendable", function(next){
    var model = new Model(dbMockup);
    var OtherTypeOfModel = model.extend({
      myCustomModelMethod: function(){ }
    });
    var model2 = new OtherTypeOfModel(dbMockup);
    expect(model2.db).to.exist;
    expect(model2.myCustomModelMethod).to.exist;
    next();
  });
});
