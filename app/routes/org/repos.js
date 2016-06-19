import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {

    // Get the "id" property from the model resolved in the "org" route
    let orgId = Ember.get(this.modelFor('org'), 'login');
    // Fetch API data
    return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=f4e5c0a21eede1761750a1b325f9d6bba6fbad06`).then(rawRepos => {
      // debugger;
      return rawRepos.map(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      });
    });
  }
});
