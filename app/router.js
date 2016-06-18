import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', function() {
    this.route('mike');
  });
  this.route('orgs');  // /orgs
  this.route('org', {path: 'org/:id'}, function() {  // /org/emberjs
    this.route('repos');  // /org/emberjs/repos
    this.route('repo', {path: ':repoid'}, function() {  // /org/emberjs/ember-data
      this.route('contributors');
      this.route('issues');
    });
  });
  this.route('notfound',{path: '*path'});
});

export default Router;
