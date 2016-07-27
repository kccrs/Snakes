const assert = require('chai').assert;

const World = require('../lib/world');

describe('World', function() {
  var world = new World();

  it('should instantiate an object', function () {
    assert.isObject(world);
  });

  it('should have a default width and height', function() {
    assert.equal(world.width, 100);
    assert.equal(world.height, 100);
  });

  it('should have a "snake" property, which starts out as an empty array', function () {
    var world = new World(100, 100);
    assert.isArray(world.snake);
    assert.deepEqual(world.snake, []);
  });

  it('should have a "food" property, which starts out as an empty array', function () {
    var world = new World(100, 100);
    assert.isArray(world.food);
    assert.deepEqual(world.food, []);
  });

});
