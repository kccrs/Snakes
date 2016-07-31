// const Food = require('../lib/food');
// const World = require('../lib/world');

function Snake(x, y, width, height, world, direction){
  this.x = x || 0;
  this.y = y || 0;
  this.width = width || 20;
  this.height = height || 20;
  this.world = world;
  this.direction = direction;
}

// THIS CONTROLS HOW FAST THE SNAKE IS MOVING WHEN THE ARROWS ARE PRESSED
Snake.prototype.moveRight = function () {
  this.x +=20;
  this.direction = 'right';

  // if (this.x >= 400) {
  //   this.endGame();
  //   return (this.x = 380);
  // }
};

Snake.prototype.moveLeft = function () {
  this.x -=20;
  this.direction = 'left';

  if (this.x === -20) {
    this.endGame();
    return (this.x = 0);
  }
};

Snake.prototype.moveDown = function () {
  this.y +=20;
  this.direction = 'down';

  if (this.y === 300) {
    this.endGame();
    return (this.y = 280);
  }
};

Snake.prototype.moveUp = function () {
  this.y -=20;
  this.direction = 'up';

  if (this.y === -20) {
    this.endGame();
    return (this.y = 0);
  }
};

Snake.prototype.topLeft = function () {
  return {
    x: this.x,
    y: this.y
  };
};

Snake.prototype.topRight = function () {
  return {
    x: this.x + this.width,
    y: this.y
  };
};

Snake.prototype.bottomLeft = function () {
  return {
    x: this.x,
    y: this.y + this.height
  };
};

Snake.prototype.bottomRight = function () {
  return {
    x: this.x + this.width,
    y: this.y + this.height
  };
};

Snake.prototype.endGame = function() {
  console.log('😱Oh no, Game Over!!');
};

module.exports = Snake;
