import Ember from 'ember';

export default Ember.Route.extend({

  favorites: Ember.inject.service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set('items', this.get('favorites.items'));
  },

  actions: {
    favoriteClicked(org) {
      if (this.get('favorites.items').indexOf(org) < 0) {
        this.get('favorites').favoriteItem(org);
      } else {
        this.get('favorites').unfavoriteItem(org);
      }
    }
  },

  model: function() {
    return [
      {id: "lugless"},
      {id: "ember-cli"},
      {id: "luggageforward"},
      {id: "emberjs"},
      {id: "microsoft"},
      {id: "facebook"}
    ];
  }

});
