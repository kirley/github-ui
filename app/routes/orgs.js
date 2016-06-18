import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('items', this.get('favorites.items'));
  },

  actions: {
    addFavorite(value) {
      // alert(`hi: ${value}`);
      this.get('favorites.items').addObject({id: value});
    }
  },

  model: function() {
    return [
      {id: "emberjs"},
      {id: "ember-cli"},
      {id: "microsoft"},
      {id: "yahoo"},
      {id: "netflix"},
      {id: "facebook"}
    ];
  }

});
