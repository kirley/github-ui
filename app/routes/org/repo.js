import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let org = this.modelFor('org');

    return $.get(`https://api.github.com/repos/${org.login}/${params.repoid}?access_token=f4e5c0a21eede1761750a1b325f9d6bba6fbad06`).then(rawRepo => {
      rawRepo.oldId = rawRepo.id;
      rawRepo.id = rawRepo.name
      return rawRepo;
    });
  }
});
