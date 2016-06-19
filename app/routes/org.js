import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return $.get(`https://api.github.com/orgs/${params.id}?access_token=f4e5c0a21eede1761750a1b325f9d6bba6fbad06`).then(raw => {
      raw.oldId = raw.id;
      raw.id = raw.name
      return raw;
    }).then(function(data){
      return new Ember.RSVP.Promise((res,rej) => {
        Ember.run.later(() => {
          res(data);
        }, 3000);
      })
  });
  },

  actions: {
    error(jqXhr, transition, route) {
      if (jqXhr && jqXhr.status === 404) {
        return this.intermediateTransitionTo('org.notfound');
      } else {
        return true;
      }
    }
  }

});
