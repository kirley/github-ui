import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {

  // Fetch API data
  // return $.get(`https://api.github.com/orgs/${params.id}`).then(raw => {
  return $.get(`https://api.github.com/orgs/${params.id}`).then(raw => {
      raw.oldId = raw.id;
      raw.id = raw.name
      return raw;
    });
  }

});
