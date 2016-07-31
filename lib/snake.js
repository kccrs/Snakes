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
// Snake.prototype.canMoveRight = function() {
//   //
// };

Snake.prototype.moveRight = function () {
  this.x +=20;
  this.direction = 'right';

  if (this.x >= 400) {
    alert('what?');
  }
};

Snake.prototype.moveLeft = function () {
  this.x -=20;
  this.direction = 'left';

  if (this.x <= 0) {
    return (this.x = 0);
  }
};

Snake.prototype.moveDown = function () {
  this.y +=20;
  this.direction = 'down';

  if (this.y + this.height >= 300) {
    return (this.y = 280);
  }
};

Snake.prototype.moveUp = function () {
  this.y -=20;
  this.direction = 'up';

  if (this.y <= 0) {
    return (this.y = 0);
  }
};

// Snake.prototype.topLeft = function () {
//   return {
//     x: this.x,
//     y: this.y
//   };
// };
//
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
//
// Snake.prototype.bottomRight = function () {
//   return {
//     x: this.x + this.width,
//     y: this.y + this.height
//   };
// };

Snake.prototype.isEatingFood = function(food) {
  return (this.x < food.x + food.width &&
   this.x + this.width > food.x &&
   this.y < food.y + food.height &&
   this.height + this.y > food.y);
    // collision detected!
//     console.log('bam!');
};

module.exports = Snake;
