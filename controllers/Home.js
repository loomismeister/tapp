module.exports = BaseController.extend({
  name: "Home",
  content: null,
  run: function(req,res, next){
    model.setDB(req.db);
    var self = this;
    this.getContent(function(){
      var v = new View(res, 'home');
      v.render(self.content);
    });
  },
  getContent: function(callback){
    var self = this;
    this.content = {};
    model.getlist(function(err, records){
      ... storing data to content object
      model.getlist(function(err, records){
        ...storing data to content object
        callback();
      }, {type: 'blog'});
    }, {type: 'home' });
  }
});
