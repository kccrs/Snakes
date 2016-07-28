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

describe('topLeft()', function () {

    it('should have a method called "topLeft()"', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isFunction(snake.topLeft);
    });

    it('should return an object', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isObject(snake.topLeft());
    });

    it('should return an object with an "x" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.topLeft().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.topLeft().y);
    });

    it('should return the x coordinate of the topLeft corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.topLeft().x, snake.x);
    });

    it('should return the y coordinate of the topLeft corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.topLeft().y, snake.y);
    });

  });

  describe('topRight()', function () {

    it('should have a method called "topRight()"', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isFunction(snake.topRight);
    });

    it('should return an object', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isObject(snake.topRight());
    });

    it('should return an object with an "x" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.topRight().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.topRight().y);
    });

    it('should return the x coordinate of the topRight corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.topRight().x, snake.x + snake.width);
    });

    it('should return the y coordinate of the topRight corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.topRight().y, snake.y);
    });

  });

  describe('bottomLeft()', function () {

    it('should have a method called "bottomLeft()"', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isFunction(snake.bottomLeft);
    });

    it('should return an object', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isObject(snake.bottomLeft());
    });

    it('should return an object with an "x" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.bottomLeft().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.bottomLeft().y);
    });

    it('should return the x coordinate of the bottomLeft corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.bottomLeft().x, snake.x);
    });

    it('should return the y coordinate of the bottomLeft corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.bottomLeft().y, snake.y + snake.height);
    });

  });

  describe('bottomRight()', function () {

    it('should have a method called "bottomRight()"', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isFunction(snake.bottomRight);
    });

    it('should return an object', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isObject(snake.bottomRight());
    });

    it('should return an object with an "x" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.bottomRight().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.isNumber(snake.bottomRight().y);
    });

    it('should return the x coordinate of the bottomRight corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.bottomRight().x, snake.x + snake.width);
    });

    it('should return the y coordinate of the bottomRight corner of the snake', function () {
      var snake = new Snake(7, 12, 15, 15);
      assert.equal(snake.bottomRight().y, snake.y + snake.height);
    });

  });

});
