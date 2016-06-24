import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'github-ui/tests/helpers/start-app';

function json(obj, status=200) {
  return [status, { 'Content-Type' : 'text/json'}, JSON.stringify(obj)];
}

let server;


module('Acceptance | index', {
  beforeEach: function() {
    this.application = startApp();
    server = new Pretender(function(){
      this.get('https://api.github.com/orgs/:id',
          () => json({
            id: 99,
            login: 'emberjs',
            name: 'Ember.js'
          }));

      this.get('https://api.github.com/orgs/:id/:repoid',
          () => json([{
            id: 123,
            name: 'data'
          }]));

      this.get('https://api.github.com/repos/:id/:repoid',
          () => json({
            id: 123,
            name: 'data'
          }));

      this.get('https://api.github.com/repos/:id/:repoid/issues',
          () => json([
            {id: 1, title: 'Issue 1'},
            {id: 2, title: 'Issue 2'}
          ]));

      this.get('https://api.github.com/repos/:id/:repoid/contributors',
          () => json([
            {id: 1, login: 'contributor1'},
            {id: 2, login: 'contributor2'}
          ]));
    });
  },

  afterEach: function() {
    server.shutdown();
    Ember.run(this.application, 'destroy');
  }
});

module('Acceptance | index', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/orgs', 'reach the orgs route');
  });

  click('a[href*="org/emberjs"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/repos', 'reach the repos route');
  });

  click('a[href*="org/emberjs/data"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/data/issues', 'reach the issues route');
    assert.ok(Ember.$('ul.issues-list li').length > 2, 'found some issues too!')
  });

  click('a[href*="org/emberjs/data/contributors"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/data/contributors', 'reach the contributors route');
    assert.ok(Ember.$('ul.contributors-list div').length > 2, 'found some contributors too!')
  });


});
