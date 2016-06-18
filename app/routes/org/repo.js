import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = this.modelFor('org').id;

    return $.get(`https://api.github.com/repos/${orgName}/${params.id}`).then(raw => {
      raw.oldId = raw.id;
      raw.id = raw.name
      return raw;
    });
  }
});
