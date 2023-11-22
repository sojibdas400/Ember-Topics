import { module, test } from 'qunit';
import { setupTest } from 'all-in-one/tests/helpers';

module('Unit | Route | slider', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:slider');
    assert.ok(route);
  });
});
