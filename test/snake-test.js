const assert = require('chai').assert;
const Snake = require('../lib/snake');
const Food = require('../lib/food');
// const World = require('../lib/world');


describe('Snake', function() {

  context('with default', function() {

    var snake = new Snake();

    it('has all default values', function() {
      assert.equal(snake.x, 0);
      assert.equal(snake.y, 0);
      assert.equal(snake.snakeBodyWidth, 20);
      assert.equal(snake.snakeBodyHeight, 20);
    });
  });

  context('with some assigned attributes', function() {
    // assigning x and y values through variables
    var xValue = 20;
    var yValue = 20;
    var snake = new Snake(xValue, yValue);

    it('should allow us to assign specific x and y values and otherwise use defaults', function(){
      // I should be able to create a Snake with x and y assigned
      // test that the x and y are not defaults
      assert.equal(snake.snakeBodyHeight, 20);
      assert.equal(snake.snakeBodyWidth, 20);
      assert.equal(snake.x, xValue);
      assert.equal(snake.y, yValue);
      // test that the height and width are defaults
    });
  });

  context('moveRight()', function () {

    it('should have a method called "moveRight()', function () {
      var snake = new Snake(20, 20);
      assert.isFunction(snake.moveRight);
    });

    it('moveRight() should stop snake when it hits the right border', function() {
      var snake = new Snake(20, 20, 385, 300);
      assert.equal(snake.snakeBodyWidth, 385);
    });

    it('"moveRight()" should increment the "x" property by 20', function () {
      var snake = new Snake(20, 20);
      snake.moveRight();
      assert.equal(snake.x, 40);
    });
  });

  context('moveLeft()', function () {

    it('should have a method called "moveLeft()', function () {
      var snake = new Snake(20, 20);
      assert.isFunction(snake.moveLeft);
    });

    it('"moveLeft()" should decrement the "x" property by 20', function () {
      var snake = new Snake(20, 20);
      snake.moveLeft();
      assert.equal(snake.x, 0);
    });
  });

  context('moveDown()', function () {

    it('should have a method called "moveDown()', function () {
      var snake = new Snake(20, 20);
      assert.isFunction(snake.moveDown);
    });

    it('"moveDown()" should increment the "y" property by 20', function () {
      var snake = new Snake(20, 20);
      snake.moveDown();
      assert.equal(snake.y, 40);
    });
  });

  context('moveUp()', function () {

    it('should have a method called "moveUp()', function () {
      var snake = new Snake(20, 20);
      assert.isFunction(snake.moveUp);
    });

    it('"moveUp()" should decrement the "y" property by 20', function () {
      var snake = new Snake(20, 20);
      snake.moveUp();
      assert.equal(snake.y, 0);
    });
  });

});
