import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('items', this.get('favorites.items'));
  },

  actions: {
    addFavorite(org) {
      this.get('favorites').favoriteItem(org);
    }
  },

  model: function() {
    return [
      {id: "ember-cli"},
      {id: "microsoft"},
      {id: "facebook"}
    ];
  }

});
