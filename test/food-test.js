const assert = require('chai').assert;

const Food = require('../lib/food');

describe('Food', function(){
  var food = new Food();

  context('use default values for properties', function(){
    it('should instantiate an Object called Food', function(){
      assert.isObject(food);
    });
    // object accepts default values
    it('has all default values', function(){
      assert.equal(food.x, 100);
      assert.equal(food.y, 50);
      assert.equal(food.width, 10);
      assert.equal(food.height, 10);
    });
  });

  context('accepts variables', function(){
    xValue = 70;
    yValue = 30;
    var food = new Food(xValue, yValue);

    //object has default width and height but accepts variables for x,y
    it('accepts variables for x and y, keeping default for others', function(){
      assert.equal(food.x, xValue);
      assert.equal(food.y, yValue);
      assert.equal(food.width, 10);
      assert.equal(food.height, 10);
    });
  });

describe('topLeft()', function () {

    it('should have a method called "topLeft()"', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isFunction(food.topLeft);
    });

    it('should return an object', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isObject(food.topLeft());
    });

    it('should return an object with an "x" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.topLeft().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.topLeft().y);
    });

    it('should return the x coordinate of the topLeft corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.topLeft().x, food.x);
    });

    it('should return the y coordinate of the topLeft corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.topLeft().y, food.y);
    });

  });

  describe('topRight()', function () {

    it('should have a method called "topRight()"', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isFunction(food.topRight);
    });

    it('should return an object', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isObject(food.topRight());
    });

    it('should return an object with an "x" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.topRight().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.topRight().y);
    });

    it('should return the x coordinate of the topRight corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.topRight().x, food.x + food.width);
    });

    it('should return the y coordinate of the topRight corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.topRight().y, food.y);
    });

  });

  describe('bottomLeft()', function () {

    it('should have a method called "bottomLeft()"', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isFunction(food.bottomLeft);
    });

    it('should return an object', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isObject(food.bottomLeft());
    });

    it('should return an object with an "x" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.bottomLeft().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.bottomLeft().y);
    });

    it('should return the x coordinate of the bottomLeft corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.bottomLeft().x, food.x);
    });

    it('should return the y coordinate of the bottomLeft corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.bottomLeft().y, food.y + food.height);
    });

  });

  describe('bottomRight()', function () {

    it('should have a method called "bottomRight()"', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isFunction(food.bottomRight);
    });

    it('should return an object', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isObject(food.bottomRight());
    });

    it('should return an object with an "x" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.bottomRight().x);
    });

    it('should return an object with a "y" property that is a number', function () {
      var food = new Food(100, 50, 10, 10);
      assert.isNumber(food.bottomRight().y);
    });

    it('should return the x coordinate of the bottomRight corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.bottomRight().x, food.x + food.width);
    });

    it('should return the y coordinate of the bottomRight corner of the food', function () {
      var food = new Food(100, 50, 10, 10);
      assert.equal(food.bottomRight().y, food.y + food.height);
    });

  });

});
