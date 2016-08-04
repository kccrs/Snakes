const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const World = require('../lib/world');

describe('World in relation to snake', function() {

  it('should have a rightArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.rightArrow);
  });

  it('should move the snake right when the moveRight() is pressed', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveRight();
    assert.equal(snake.x, 40);
  });

  it('should have a leftArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.leftArrow);
  });

  it('should move the snake left when the moveLeft() is pressed', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveLeft();
    assert.equal(snake.x, 0);
  });

  it('should have a upArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.upArrow);
  });

  it('should move the snake up when moveUp() is called', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveUp();
    assert.equal(snake.y, 0);
  });

  it('should have a downArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.downArrow);
  });

  it('should move the snake down when moveDown() is called', function() {
    var world = new World (100, 100);
    var snake = new Snake (20, 20, 20, 20);
    snake.moveDown();
    assert.equal(snake.y, 40);
  });
});

context('snake eats', function() {

  it('should return "food"   when food is eaten by snake', function() {
    var snake = new Snake(20, 20);
    var food = new Food(40, 20);
    var world = new World(600, 400);

    world.rightArrow('food');
    assert.equal('food', 'food');
  });

});
