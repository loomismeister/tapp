var expect = require('chai').expect;
var BaseController = require("../controllers/Base");

describe("Base controller", function(){
  it("should have a method extend which returns a child instance", function(next){
    expect(BaseController.extend).to.exist;
    var child = BaseController.extend({ name: "my child controller"});
    expect(child.run).to.exist;
    expect(child.name).to.equal("my child controller");
    next()
  });
  it("should be able to create different childs", function(next){
    var childA = BaseController.extend({ name: "child A", customProperty: 'value'});
    var childB = BaseController.extend({ name: "child B" });
    expect(childA.name).to.not.equal(childB.name);
    expect(childB.customProperty).to.not.exist;
    next();
  });
});
