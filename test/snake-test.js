const assert = require('chai').assert;

const Snake = require('../lib/snake');

describe('Snake', function() {

  context('with default', function() {
    // Make a Snake
    // Assign width and height
    // Assign x and y on where the snake will start off

    var snake = new Snake();

    it('has all default values', function() {
      assert.equal(snake.x, 7);
      assert.equal(snake.y, 12);
      assert.equal(snake.width, 15);
      assert.equal(snake.height, 15);
    });
  });

  context('with some assigned attributes', function() {
    // assigning x and y values through variables
    var xValue = 15;
    var yValue = 20;
    var snake = new Snake(xValue, yValue);

  it('should allow us to assign specific x and y values and otherwise use defaults', function(){
      // I should be able to create a Snake with x and y assigned
      // test that the x and y are not defaults
      assert.equal(snake.height, 15);
      assert.equal(snake.width, 15);
      assert.equal(snake.x, xValue);
      assert.equal(snake.y, yValue);
      // test that the height and width are defaults
    });
   });

    context('moveRight()', function () {

      it('should have a method called "moveRight()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveRight);
      });

      it('"moveRight()" should increment the "x" property by 4', function () {
        var snake = new Snake(7, 12);
        snake.moveRight();
        assert.equal(snake.x, 11);
      });
    });

    context('moveLeft()', function () {

      it('should have a method called "moveLeft()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveLeft);
      });

      it('"moveLeft()" should decrement the "x" property by 4', function () {
        var snake = new Snake(7, 12);
        snake.moveLeft();
        assert.equal(snake.x, 3);
      });
    });

    context('moveDown()', function () {

      it('should have a method called "moveDown()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveDown);
      });

      it('"moveDown()" should increment the "y" property by 4', function () {
        var snake = new Snake(7, 12);
        snake.moveDown();
        assert.equal(snake.y, 16);
      });
    });

    context('moveUp()', function () {

      it('should have a method called "moveUp()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveUp);
      });

      it('"moveUp()" should decrement the "y" property by 4', function () {
        var snake = new Snake(7, 12);
        snake.moveUp();
        assert.equal(snake.y, 8);
      });
    });

    context('Collision Detection', function() {

      it('should have a method called isCollidingWithFood()', function() {
        var snake = new Snake(7, 12, 400, 300);
        assert.isFunction(snake.isCollidingWithFood);
      });



    });
  });
