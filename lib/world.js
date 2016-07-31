const Snake = require('./snake');
const Food = require('./food');

function World(width, height, food) {
  this.width = 400;
  this.height = 300;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = food;
}

// World.prototype.growSnake = function() {
//   return this.totalSnake.push(new Snake(0, 40, 20, 20));
// };


World.prototype.tick = function() {
  var direction = this.snake.direction;
    // if (direction === 'right' && this.snake.canMoveRight()) { this.snake.moveRight(); }
    if (direction === 'right') { this.snake.moveRight(); }
    if (direction === 'left') { this.snake.moveLeft(); }
    if (direction === 'up') { this.snake.moveUp(); }
    if (direction === 'down') { this.snake.moveDown(); }
  };

World.prototype.isSnakeEating = function(food) {
  if (snake.isEatingFood(food)) {
    console.log("so hungry!");
  }
};


module.exports = World;
