const assert = require('chai').assert;

const Snake = require('../lib/snake');

describe('Snake', function() {

  context('with default', function() {
    // Make a Snake
    // Assign width and height
    // Assign x and y on where the snake will start off

    var snake = new Snake({});

    it('has all default values', function() {
      assert.equal(snake.x, 7);
      assert.equal(snake.y, 12);
      assert.equal(snake.width, 5);
      assert.equal(snake.height, 5);
    });
  });

  context('with some assigned attributes', function() {
    // assigning x and y values through variables
    var xValue = 10;
    var yValue = -20;
    var options = {x: xValue, y: yValue};
    var snake = new Snake(options);

  it('should allow us to assign specific x and y values and otherwise use defaults', function(){
      // I should be able to create a Snake with x and y assigned
      // test that the x and y are not defaults
      assert.equal(snake.height, 5);
      assert.equal(snake.width, 5);
      assert.equal(snake.x, xValue);
      assert.equal(snake.y, yValue);
      // test that the height and width are defaults
    });
   });

   context('with all assigned attributes', function(){
     var xValue = 30;
     var yValue = 40;
     var widthValue = 50;
     var heightValue = 60;

     var options = {
      x: xValue,
      y: yValue,
      height: heightValue,
      width: widthValue};
      var snake = new Snake(options);

      it('should allow us to assign values to all properties otherwise use defaults', function(){
        assert.equal(snake.x, xValue);
        assert.equal(snake.y, yValue);
        assert.equal(snake.height, heightValue);
        assert.equal(snake.width, widthValue);
      });
   });

    context('moveRight()', function () {

      it('should have a method called "moveRight()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveRight);
      });

      it('"moveRight()" should increment the "x" property by 1', function () {
        var snake = new Snake(7, 12);
        snake.moveRight();
        assert.equal(snake.x, 8);
      });
    });

    context('moveLeft()', function () {

      it('should have a method called "moveLeft()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveLeft);
      });

      it('"moveLeft()" should decrement the "x" property by 1', function () {
        var snake = new Snake(7, 12);
        snake.moveLeft();
        assert.equal(snake.x, 6);
      });
    });

    context('moveDown()', function () {

      it('should have a method called "moveDown()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveDown);
      });

      it('"moveDown()" should increment the "y" property by 1', function () {
        var snake = new Snake(7, 12);
        snake.moveDown();
        assert.equal(snake.y, 13);
      });
    });

    context('moveUp()', function () {

      it('should have a method called "moveUp()', function () {
        var snake = new Snake(7, 12);
        assert.isFunction(snake.moveUp);
      });

      it('"moveUp()" should decrement the "y" property by 1', function () {
        var snake = new Snake(7, 12);
        snake.moveUp();
        assert.equal(snake.y, 11);
      });
    });

    // context('getTaller()', function () {
    //
    //   it('should have a method called "getTaller()"', function () {
    //     var block = new Block();
    //     assert.isFunction(block.getTaller);
    //   });
    //
    //   it('"getTaller()" should increment its height by 1', function () {
    //     var block = new Block(0, 0, 10, 10);
    //     block.getTaller();
    //     assert.equal(block.height, 11);
    //     assert.equal(block.width, 10);
    //   });
    // });
    //
    // context('growInLength()', function () {
    //
    //   it('should have a method called "grow()"', function () {
    //     var snake = new Snake();
    //     assert.isFunction(snake.grow);
    //   });
    //
    //   it('"growInLength()" should increment the "x" property by 4', function () {
    //     var snake = new Snake(0, 0, 10, 10);
    //     block.growInLength();
    //     assert.equal(snake.x, 11);
    //   });
    // });
  });
