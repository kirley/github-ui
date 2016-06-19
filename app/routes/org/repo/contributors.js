import Ember from 'ember';

export default Ember.Route.extend({
model(params) {
  let orgId = Ember.get(this.modelFor('org'), 'login');
  let repoId = Ember.get(this.modelFor('org.repo'), 'name');
  // Fetch API data
  return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors`).then(rawContributors => {
    return rawContributors.map(rawContributor => {
        rawContributor.oldId = rawContributor.id;
        rawContributor.id = rawContributor.name
        return rawContributor;
      });
    });
  }
});
