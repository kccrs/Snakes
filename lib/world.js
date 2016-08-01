const Snake = require('./snake');
const Food = require('./food');

function World(width, height, food) {
  this.width = 400;
  this.height = 300;
  this.snake = new Snake(0, 0, 20, 20);
  this.generateFood();
}

// GENERATE FOOD IN DIFFERENT POSITION
World.prototype.generateFood = function() {
  this.food = new Food(
    Math.round(Math.round(Math.random() * 380)/20) * 20,
    Math.round(Math.round(Math.random() * 280)/20) * 20,
    20,
    20
  );
};

// REMOVING FOOD WHEN SNAKE EATS IT AND CALLING GENERATEFOOD() TO PLACE FOOD IN A DIFFERENT LOCATION
World.prototype.snakeEatsFood =  function() {
  // if statement: when snake eats food equals true (ALREADY DONE DOWN BELOW)
  // return remove food on screen &
  //return this.generateFood();

};

// World.prototype.growSnake = function() {
//   return this.totalSnake.push(new Snake(0, 40, 20, 20));
// };
World.prototype.rightOfSnake = function() {
  if (this.snake.x + 20 === this.food.x && this.snake.y === this.food.y) {
    return "food";
  } else if (this.snake.x + 20 === 400) {
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
      // make food disappear
      // snake grows longer
      // new food appears
      this.generateFood();
      break;
    case 'wall':
      console.log('I hit a wall');
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveRight();
  }
  console.log(this.rightOfSnake());
};


World.prototype.leftOfSnake = function() {
  if (this.snake.x - 20 === this.food.x && this.snake.y === this.food.y) {
    return "food";
  } else if (this.snake.x === 0) {
    return "wall";
  }
  // else if(){}
    // more snake
  else {
    return "empty";
  }
};

World.prototype.leftArrow = function () {
  switch (this.leftOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveLeft();
      // make food disappear
      // snake grows longer
      // new food appears
      break;
    case 'wall':
      console.log('I hit a wall');
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveLeft();
  }
  console.log(this.leftOfSnake());
};

World.prototype.upOfSnake = function() {
  if (this.snake.y - 20 === this.food.y && this.snake.x === this.food.x) {
    return "food";
  } else if (this.snake.y === 0) {
    return "wall";
  }
  // else if(){}
    // more snake
  else {
    return "empty";
  }
};

World.prototype.upArrow = function () {
  switch (this.upOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveUp();
      // make food disappear
      // snake grows longer
      // new food appears
      break;
    case 'wall':
      console.log('I hit a wall');
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveUp();
  }
  console.log(this.upOfSnake());
};

World.prototype.downOfSnake = function() {
  if (this.snake.y + 20 === this.food.y && this.snake.x === this.food.x) {
    return "food";
  } else if (this.snake.y + 20 === 300) {
    return "wall";
  }
  // else if(){}
    // more snake
  else {
    return "empty";
  }
};

World.prototype.downArrow = function () {
  switch (this.downOfSnake()) {
    case 'food':
      console.log('I ate food');
      this.snake.moveDown();
      // make food disappear
      // snake grows longer
      // new food appears
      break;
    case 'wall':
      console.log('I hit a wall');
      // snake can move up or down but if goes right again it dies - if this.snake.x === 400 - game over
      break;
    default:
      this.snake.moveDown();
  }
  console.log(this.downOfSnake());
};

World.prototype.tick = function() {
  var direction = this.snake.direction;
    if (direction === 'right') {this.rightArrow();}
    if (direction === 'left') {this.leftArrow();}
    if (direction === 'up') {this.upArrow();}
    if (direction === 'down') {this.downArrow();}
  };


module.exports = World;
