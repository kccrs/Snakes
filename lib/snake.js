function Snake(x, y, width, height, world){
  this.x = x || 7;
  this.y = y || 12;
  this.width = 15;
  this.height = 15;
  this.world = world;
}

Snake.prototype.moveRight = function () {
  this.x+=4;
  return this;
};

Snake.prototype.moveLeft = function () {
  this.x-=4;
  return this;
};

Snake.prototype.moveDown = function () {
  this.y+=4;
  return this;
};

Snake.prototype.moveUp = function () {
  this.y-=4;
  return this;
};

Snake.prototype.isCollidingWithFood = function(snake) {
  var hittingFoodWidth = snake.x >= food.x && snake.x <= food.bottom().x;
  var hittingFoodHeight =
};


module.exports = Snake;
