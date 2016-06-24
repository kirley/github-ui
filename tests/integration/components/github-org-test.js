import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org org='aaron'}}`);

  assert.equal(this.$().text().trim(), '[ Favorite ]', 'Inline syntax basic handling');

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      template block text
    {{/github-org}}
  `);

  assert.equal(this.$().text().trim(), '[ Favorite ]', 'Inline syntax basic handling');
});


test('it binds data', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org org='aaron'}}`);

  // const org = Ember.Object.create({
  //   id: 'my-org',
  //   favorites: {
  //     items: []
  //   }
  // });


  const org = Ember.Object.create({
    id: 'my-org'
  });

  this.set('o', org);
  this.render(hbs`{{github-org org=o}}`);
  // this.render(hbs`{{github-org org=o}}`);
  assert.equal(Ember.$('.github-org a').text(),'my-org','my org shows in list');



  // Ember.run(() => {
  //   org.set('o.id', 'your-org');
  //   assert.equal(Ember.$('.github-org a').text(),'your-org','your org shows in list');
  // });

  // this.on('favoriteClicked',function(){
  //   // debugger;
  // });

  Ember.$('.github-org span').click();

  assert.equal(this.$().text().trim(),`[ Favorite ]

my-org`,'favorite your the org');

});



// {{github-org org=o click-favorite="favoriteClicked"}}


// <span {{action 'favoriteWasClicked'}}>
// [ {{if isFavorited 'Unavorite' 'Favorite'}} ]
// </span>
// {{link-to org.id 'org' org.id}}

// {{yield}}
