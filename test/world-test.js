const assert = require('chai').assert;
const World = require('../lib/world');
const Food = require('../lib/food');
const Snake = require('../lib/snake');


describe('World', function() {
  var world = new World();

  it('should instantiate an object', function () {
    assert.isObject(world);
  });

  it('should have a default width and height', function() {
    assert.equal(world.width, 600);
    assert.equal(world.height, 400);
  });

  it('should have a "snake" property, which instantiates a new snake', function () {
    var world = new World(600, 400);
    assert.isObject(world.snake);
  });

  // it('should not generate food in the same position as snake', function() {
  //   var food = new Food(0, 0, 20, 20);
  //   var snake = new Snake(0, 0, 20, 20);
  //   var snakeXValues = [0];
  //   var snakeYValues = [0];

    // Is the food X value in the snakeXValues array? If yes, dont make food.


    // assert.isTrue(food.x !== snake.x && food.y !==  snake.y);
    // assert.isTrue(food.x === snake.x && food.y === snake.y);
  // });


});
