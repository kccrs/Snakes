const Snake = require('./snake');
const Food = require('./food');

function World(width, height) {
  this.width = 400;
  this.height = 300;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = new Food(Math.round(Math.round(Math.random() * 380)/20) * 20,
              (Math.round(Math.round(Math.random() * 280)/20) * 20),
              20,
              20);
  // this.totalSnake = [this.snake];
}

// World.prototype.growSnake = function() {
//   return this.totalSnake.push(new Snake(0, 40, 20, 20));
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
    if (direction === 'right') {this.snake.moveRight();}
    if (direction === 'left') {this.snake.moveLeft();}
    if (direction === 'up') {this.snake.moveUp();}
    if (direction === 'down') {this.snake.moveDown();}
  };

World.prototype.isSnakeEating = function() {
  if (this.snake.x >= food.x + food.width && this.x<= food.x + food.width) {
    alert('yum');
  }
  if (this.y >= food.y + food.height && this.y<= food.y + food.height) {
    alert('yum');
  }
};




module.exports = World;
