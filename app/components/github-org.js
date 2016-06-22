import Ember from 'ember';
import isInArray from '../utils/is-in-array';

export default Ember.Component.extend({

  // Change root element from <div> to <li>
  tagName: 'li',
  favorites: Ember.inject.service(),
  isFavorited: isInArray('org', 'favorites.items'),
  actions: {
    favoriteWasClicked() {
      this.sendAction('click-favorite', this.get('org'));
    }
  }

});
