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
      assert.equal(food.width, 20);
      assert.equal(food.height, 20);
    });
  });

  context('accepts variables', function(){
    xValue = 80;
    yValue = 40;
    var food = new Food(xValue, yValue);

    //object has default width and height but accepts variables for x,y
    it('accepts variables for x and y, keeping default for others', function(){
      assert.equal(food.x, xValue);
      assert.equal(food.y, yValue);
      assert.equal(food.width, 20);
      assert.equal(food.height, 20);
    });
  });

// describe('topLeft()', function () {
//
//     it('should have a method called topLeft() that returns an object', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.isObject(food.topLeft());
//     });
//
//     it('should return the x and y coordinates of the topLeft corner of the food', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.equal(food.topLeft().x, food.x);
//       assert.equal(food.topLeft().y, food.y);
//     });
//   });
//
//   describe('topRight()', function () {
//
//     it('should have a method called topRight() that returns an object', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.isObject(food.topRight());
//     });
//
//     it('should return the x and y coordinates of the topRight corner of the food', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.equal(food.topRight().x, food.x + food.width);
//       assert.equal(food.topRight().y, food.y);
//     });
//   });
//
//   describe('bottomLeft()', function () {
//
//     it('should have a method called bottomLeft() that returns an object', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.isObject(food.bottomLeft());
//     });
//
//     it('should return the x and y coordinates of the bottomLeft corner of the food', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.equal(food.bottomLeft().x, food.x);
//       assert.equal(food.bottomLeft().y, food.y + food.height);
//     });
//   });
//
//   describe('bottomRight()', function () {
//
//     it('should have a method called bottomRight() that returns an object', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.isObject(food.bottomRight());
//     });
//
//     it('should return the x and y coordinates of the bottomRight corner of the food', function () {
//       var food = new Food(100, 50, 20, 20);
//       assert.equal(food.bottomRight().x, food.x + food.width);
//       assert.equal(food.bottomRight().y, food.y + food.height);
//     });
//   });

});
