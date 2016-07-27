const assert = require('chai').assert;
const Snake = require('../lib/snake');
const World = require('../lib/world');

describe('Snake is in relations to the World', function() {

  it('should know about the World if it is passed in', function() {
    var world = new World (100, 100);
    var snake = new Snake (7, 12, 5, 5, world);
    assert.equal(snake.world, world);
  });

  it('should know about a world if it is created using world.addSnake', function() {
    var world = new World (100, 100);
    var snake = new Snake (7, 12, 5, 5, world);
    world.addSnake(snake);
    assert.equal(snake.world, world);
  });
});

describe('World in relation to blocks', function() {

  it('should have a rightArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.rightArrow);
  });

  it('should move the block right whent the rightArrow() is pressed', function() {
    var world = new World (100, 100);
    var snake = new Snake (7, 12, 5, 5);
    world.addSnake(snake);
    world.rightArrow();
    assert.equal(snake.x, 8);
  });
});
