const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const World = require('../lib/world');

describe('world in relation to food', function() {

  it('should have a method called addFood()', function(){
    var world = new World(this.width, this.height);
    assert.isFunction(world.addFood);
  });

  it('should know about the food added to the world', function() {
    var world = new World(this.width, this.height);
    var food = new Food(20, 20, 20, 20);

    world.addFood(food);
    assert.include(world.food, food);
  });

  it('should return true if food appears outside the right world boundary', function() {
    var world = new World(this.width, this.height);
    var food = new Food(400, 50, 20, 20);

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
    var food = new Food(100, 300, 20, 20);

    assert.isTrue(food.y > world.height - food.height);
  });

});
