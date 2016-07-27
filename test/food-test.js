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
      assert.equal(food.width, 5);
      assert.equal(food.height, 5);
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
      assert.equal(food.width, 5);
      assert.equal(food.height, 5);
    });
  });

});
