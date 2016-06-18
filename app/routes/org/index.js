import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this._super(...arguments);
    this.transitionTo('org.repos');
  }
  // redirect: function() {
  //   this.replaceWith('org.repos');
  // }
});
