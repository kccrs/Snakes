const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
const World = require('../lib/world');

describe('World in relation to snake', function() {

  context('Moving right', function() {

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

    it('rightofSnake() should test if snake is running into a wall', function() {
      var world = new World (600, 100);
      var snake = new Snake (600, 20, 20, 20);

      world.rightOfSnake();
      assert.equal(snake.x, 600);
    });
  });

  context('Moving left', function() {
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

    it('leftofSnake() should test if snake is running into a wall', function() {
      var world = new World (0, 100);
      var snake = new Snake (0, 20, 20, 20);

      world.leftOfSnake();
      assert.equal(snake.x, 0);
    });
  });

  context('Moving Up', function() {
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

    it('upofSnake() should test if snake is running into a wall', function() {
      var world = new World (600, 0);
      var snake = new Snake (600, 0, 20, 20);

      world.upOfSnake();
      assert.equal(snake.y, 0);
    });
  });

  context('Moving Down', function() {
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

    it('downofSnake() should test if snake is running into a wall', function() {
      var world = new World (600, 400);
      var snake = new Snake (600, 400, 20, 20);

      world.downOfSnake();
      assert.equal(snake.y, 400);
    });
  });
});
