import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('social-links', 'Integration | Component | social links', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{social-links}}`);

  assert.equal(this.$().text().trim(), '[ Expand ]');

  // Template block usage:
  this.render(hbs`
    {{#social-links}}
      template block text
    {{/social-links}}
  `);

  assert.equal(this.$().text().trim(), '[ Expand ]');
});
