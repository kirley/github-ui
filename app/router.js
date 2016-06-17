import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', function() {
    this.route('mike');
  });
  this.route('orgs');

  this.route('org', function() {
    this.route('facebook', function() {
      this.route('repos');

      this.route('repo', function() {
        this.route('issues');
        this.route('contributors');
      });
    });
    this.route('netflix');
    this.route('yahoo');
    this.route('emberjs');
  });
});

export default Router;
