(function(){
  var App = Ember.Application.create();

  DS.Store.create({
    revision: 12,
    adapter: DS.RESTAdapter.create({
      namespace: 'api'
    })
  });

  App.Kitty = DS.Model.extend({
    name: DS.attr('string'),
    picture: DS.attr('string')
  });

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return App.Kitty.find();
    }
  });
})();
