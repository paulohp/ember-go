(function(){
  var App = Ember.Application.create();

  DS.Store.create({
    revision: 12,
    adapter: DS.RESTAdapter.create({
      namespace: 'api'
    })
  });

  App.Job = DS.Model.extend({
    name: DS.attr('string'),
    picture: DS.attr('string')
  });

  App.Pic = DS.Model.extend({
    name: DS.attr('string'),
    image: DS.attr('string')
  });

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return App.Pic.find();
    }
  });
})();
