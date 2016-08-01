const assert = require('chai').assert;
const World = require('../lib/world');



describe('World', function() {
  var world = new World();

  it('should instantiate an object', function () {
    assert.isObject(world);
  });

  it('should have a default width and height', function() {
    assert.equal(world.width, 400);
    assert.equal(world.height, 300);
  });

  it('should have a "snake" property, which instantiates a new snake', function () {
    var world = new World(400, 300);
    assert.isObject(world.snake);
  });

});
