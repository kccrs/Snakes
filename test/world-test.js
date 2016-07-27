const assert = require('chai').assert;

const World = require('../lib/world');

describe('World', function() {
  var world = new World();

  it('should instantiate an object', function () {
    assert.isObject(world);
  });

  // has a default height and width
  // it('should have a default width and height', function() {
  //   var widthWorld = width
  // })
});
