const Snake = require('./snake');
const Food = require('./food');

function World(width, height, food) {
  this.width = 400;
  this.height = 300;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = new Food(
    Math.round(Math.round(Math.random() * 380)/20) * 20,
    Math.round(Math.round(Math.random() * 280)/20) * 20,
    20,
    20
  );
}

// World.prototype.growSnake = function() {
//   return this.totalSnake.push(new Snake(0, 40, 20, 20));
// };
World.prototype.rightOfSnake = function() {
  if (this.snake.x + 20 === this.food.x - 20) {
    return "food";
  } else if (this.snake.x + 20 === 380) {
    return "wall";
  }
  // else if(){}
    // more snake
  else {
    return "empty";
  }
};

World.prototype.rightArrow = function () {
  switch (this.rightOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveRight();
      break;
    case 'wall':
      console.log('I hit a wall');
      break;
    default:
      this.snake.moveRight();
      console.log("default statement");
  }
  console.log(this.rightOfSnake());


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
  if(this.snake.x === this.food.x) {
       console.log('yum');
  }
};

// this.snake.y >= this.food.y + this.food.height &&
// this.snake.y <= this.food.y + this.food.height


module.exports = World;
