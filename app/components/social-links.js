import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    toggleLinkSelection() {
      this.toggleProperty('isExpanded');
      this.sendAction('on-links-toggle');
    }
  }
});
