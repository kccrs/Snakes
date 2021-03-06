const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const World = require('../lib/world');

describe('world in relation to food', function() {

  it('should return true if food appears outside the right world boundary', function() {
    var world = new World(this.width, this.height);
    var food = new Food(600, 50, 20, 20);

    assert.isTrue(food.x > world.width - food.width);
  });

  it('should return true if food appears outside the left world boundary', function() {
    var world = new World(this.width, this.height);
    var food = new Food(-10, 50, 20, 20);

    assert.isTrue(food.x < 0);
  });

  it('should return true if food appears outside the top world boundary', function() {
    var world = new World(this.width, this.height);
    var food = new Food(100, -10, 20, 20);

    assert.isTrue(food.y < 0);
  });

  it('should return true if food appears outside the bottom world boundary', function() {
    var world = new World(this.width, this.height);
    var food = new Food(100, 400, 20, 20);

    assert.isTrue(food.y > world.height - food.height);
  });

  it('should not generate food in the same position as snake', function() {
    var food = new Food(0, 0, 20, 20);
    var snake = new Snake(0, 0, 20, 20);

    assert.isFalse(food.x === snake.x && food.y === snake.y);
  });

});
