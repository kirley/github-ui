import { humanizeNumber } from '../../../helpers/humanize-number';
import { module, test } from 'qunit';

module('Unit | Helper | humanize number');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(humanizeNumber(), '', 'Empty');
  assert.equal(humanizeNumber([42]), '42', 'A number < 1000');
  assert.equal(humanizeNumber([4199]), '4.2K', 'A number > 1000');
});
