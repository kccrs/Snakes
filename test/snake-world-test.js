const assert = require('chai').assert;
const Snake = require('../lib/snake');
const World = require('../lib/world');

describe('Snake in relation to the World', function() {

  it('should know about the World if it is passed in', function() {
    var world = new World (100, 100);
    var snake = new Snake (7, 12, 15, 15, world);
    assert.equal(snake.world, world);
  });

  it('should know about a world if it is created using world.addSnake', function() {
    var world = new World (100, 100);
    var snake = new Snake (7, 12, 15, 15, world);
    world.addSnake(snake);
    assert.equal(snake.world, world);
  });
});

describe('World in relation to snake', function() {

  it('should have a method called addSnake()', function(){
      var world = new World(100, 100);
      assert.isFunction(world.addSnake);
    });

    it('should know about the snakes added to the world', function() {
      var world = new World(100, 100);
      var snake = new Snake(0, 0, 15, 15);
      world.addSnake(snake);
      assert.include(world.snakes, snake);
    });

    it('should have a method called addFood()', function(){
      var world = new World(100, 100);
      assert.isFunction(world.addFood);
    });

    // it('should know about the enemies added to the world', function() {
    //   var world = new World(100, 100);
    //   var enemy = new Block(0, 0, 10, 10);
    //
    //   world.addEnemy(enemy);
    //   assert.include(world.enemies, enemy);
    // });


  it('should have a rightArrow() method', function() {
    var world = new World(100, 100);
    assert.isFunction(world.rightArrow);
  });

  it('should move the snake right whent the rightArrow() is pressed', function() {
    var world = new World (100, 100);
    var snake = new Snake (7, 12, 15, 15);
    world.addSnake(snake);
    world.rightArrow();
    assert.equal(snake.x, 8);
  });
});
