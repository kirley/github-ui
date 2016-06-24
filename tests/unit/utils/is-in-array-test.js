import isInArray from '../../../utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('it works', function(assert) {
  const Type = Ember.Object.extend({
    key: 6,
    list: [1,2,3],
    keyInList: isInArray('key','list')
  });

  const obj = Type.create();

  assert.equal(obj.get('keyInList'),false, 'Check for key outside list');

  obj.get('list').addObject(6);

  assert.equal(obj.get('keyInList'),true, 'Check for key inside list recently updated');

  obj.set('key', 7);

  assert.equal(obj.get('keyInList'),false, 'Check for new key ouside list');

});
