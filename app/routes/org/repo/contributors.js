import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
  // Get the "id" property from the model resolved in the "org" route
  let orgName = this.modelFor('org').id;
  // Fetch API data
  return $.get(`https://api.github.com/orgs/${orgName}/repos`).then(raw => {
                       raw.oldId = raw.id;
                       raw.id = raw.name
                       return raw;
                     });
  },
  setupController(controller) {
  this._super(...arguments);
  // Make the model resolved in the "org" route available to // this route's template, via a property called "org"
  controller.set('org', this.modelFor('org'));
  }
});
