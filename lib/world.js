const Snake = require('./snake');
const Food = require('./food');


function World(width, height, food) {
  this.width = 600;
  this.height = 400;
  this.snake = new Snake(0, 0, 20, 20);
  this.food = new Food();
  // this.totalSnake = [this.snake];

}



// GENERATE FOOD IN DIFFERENT POSITION
World.prototype.generateFood = function() {
  this.food.x = Math.round(Math.round(Math.random() * 580)/20) * 20;
  this.food.y = Math.round(Math.round(Math.random() * 380)/20) * 20;
  if(this.food.x === this.snake.x && this.food.y === this.snake.y) {
    this.food.x = Math.round(Math.round(Math.random() * 580)/20) * 20;
    this.food.y = Math.round(Math.round(Math.random() * 380)/20) * 20;
  }
  // console.log("Food: X: " + this.food.x + " Y: " + this.food.y);
};


// GROWING SNAKE

// World.prototype.growSnake = function() {
//   var snakeXValue = this.food.x;
//   var snakeYValue = this.food.y;
//   this.totalSnake.push(new Snake (snakeXValue, snakeYValue, 20, 20));
//   console.log([this.totalSnake]);
  // snake has eaten food
  // head becomes first body segment
  // snakeBody becomes totalSnake
  // totalSnake = snakeHead + snakeBody

// };


// CHECKING WHAT IS IN FRONT OF SNAKE
// RIGHT
World.prototype.rightOfSnake = function() {
  if (this.snake.x + 20 === this.food.x && this.snake.y === this.food.y) {
    return "food";
  } else if (this.snake.x + 20 === 600) {
    return "wall";
  }
  // else if(){}
    // if snake runs into itself
  else {
    return "empty";
  }
};

World.prototype.rightArrow = function () {
  switch (this.rightOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveRight();
      // snake grows longer
      this.snake.addSegment();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveRight();
  }
  console.log(this.rightOfSnake());
};

// LEFT
World.prototype.leftOfSnake = function() {
  if (this.snake.x - 20 === this.food.x && this.snake.y === this.food.y) {
    return "food";
  } else if (this.snake.x === 0) {
    return "wall";
  }
  // else if(){}
  // if snake runs into itself
  else {
    return "empty";
  }
};

World.prototype.leftArrow = function () {
  switch (this.leftOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveLeft();
      // snake grows longer
      this.growSnake();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      console.log('I hit a wall');
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveLeft();
  }
  console.log(this.leftOfSnake());
};

// UP
World.prototype.upOfSnake = function() {
  if (this.snake.y - 20 === this.food.y && this.snake.x === this.food.x) {
    return "food";
  } else if (this.snake.y === 0) {
    return "wall";
  }
  // else if(){}
  // if snake runs into itself
  else {
    return "empty";
  }
};

World.prototype.upArrow = function () {
  switch (this.upOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveUp();
      // snake grows longer
      this.growSnake();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      console.log('I hit a wall');
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveUp();
  }
  console.log(this.upOfSnake());
};

// DOWN
World.prototype.downOfSnake = function() {
  if (this.snake.y + 20 === this.food.y && this.snake.x === this.food.x) {
    return "food";
  } else if (this.snake.y + 20 === 400) {
    return "wall";
  }
  // else if(){}
  // if snake runs into itself
  else {
    return "empty";
  }
};

World.prototype.downArrow = function () {
  switch (this.downOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveDown();
      // snake grows longer
      this.growSnake();
      this.generateFood();
      break;
    case 'wall':
      this.endGame();
      console.log('I hit a wall');
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveDown();
  }
  console.log(this.downOfSnake());
};

//GAME OVER
World.prototype.endGame = function() {
  console.log('😱Oh no, Game Over!!');
};

World.prototype.tick = function() {
  var direction = this.snake.direction;
    if (direction === 'right') {this.rightArrow();}
    if (direction === 'left') {this.leftArrow();}
    if (direction === 'up') {this.upArrow();}
    if (direction === 'down') {this.downArrow();}
  };


module.exports = World;
