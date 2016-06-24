import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const repo = Ember.Object.create({
    forks: 22,
    watchers: 4,
    repo: 'my-repo'
  });
  this.set('r', repo);

  this.render(hbs`{{github-repo repo=r}}`);

  assert.equal(this.$().text().trim(), '(22/4)');

  // Template block usage:
  this.render(hbs`
    {{#github-repo}}
    {{/github-repo}}
  `);

  assert.equal(this.$().text().trim(), '(/)');
});
