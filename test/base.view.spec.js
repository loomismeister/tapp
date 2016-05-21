var expect = require('chai').expect;
var View = require("../views/base");

describe("Base View", function() {
  it("should create and render a new view", function(next){
    var responseMockup = {
      render: function(template, data){
        expect(data.myProperty).to.equal('value');
        expect(template).to.equal('template-file');
        next();
      }
    }
    var v = new View(responseMockup, 'template-file');
    v.render({myProperty: 'value'});
  });
  it("should be extendable", function(next){
    var v = new View();
    var OtherView = v.extend({
      render: function(data){
        expect(data.prop).to.equal('yes');
        next();
      }
    });
    var otherViewInstance = new OtherView();
    expect(otherViewInstance.render).to.exist;
    otherViewInstance.render({prop: 'yes'});
  });
});
