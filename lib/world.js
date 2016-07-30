const Snake = require('./snake');

function World(width, height) {
  this.width = 400;
  this.height = 300;
  this.snake = new Snake(20, 20, 20, 20);
  // this.totalSnake = [this.snake];
}

// World.prototype.growSnake = function() {
//   return this.totalSnake.push(new Snake(0, 40, 20, 20));
// };

// World.prototype.addFood = function (food) {
//   food.world = this;
//   this.food.push(food);
// };

World.prototype.rightArrow = function () {
  this.snake.moveRight();
};

World.prototype.leftArrow = function () {
  this.snake.moveLeft();
};

World.prototype.upArrow = function () {
  this.snake.moveUp();
};

World.prototype.downArrow = function () {
  this.snake.moveDown();
};

World.prototype.tick = function() {
  var direction = this.snake.direction;
    if (direction === 'right') { this.snake.moveRight(); }
    if (direction === 'left') { this.snake.moveLeft(); }
    if (direction === 'up') { this.snake.moveUp(); }
    if (direction === 'down') { this.snake.moveDown(); }
  };

// World.prototype.isSnakeEating = function() {
//   var snakey = this.snakes[0];
//   return this.food.find(function(food) {
//     alert('snake eats');
//     return snakey.isEatingFood(food);
//
//   });
// };

// World.prototype.generateFood =  function() {
//   var rndX = Math.round(Math.random() * 19);
//   var rndY = Math.round(Math.random() * 14);
//   var randomFood = (rndX, rndY);
//
//   return randomFood;
// };











module.exports = World;
