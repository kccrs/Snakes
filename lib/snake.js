
function Snake(x, y, width, height, world){
  this.x = x || 7;
  this.y = y || 12;
  this.width = width || 5;
  this.height = height || 5;
  this.world = world;
}

Snake.prototype.moveRight = function () {
  this.x++;
  return this;
};

Snake.prototype.moveLeft = function () {
  this.x--;
  return this;
};

Snake.prototype.moveDown = function () {
  this.y++;
  return this;
};

Snake.prototype.moveUp = function () {
  this.y--;
  return this;
};

// Snake.prototype.growInLength() = function() {
//   ;
//   return this;
// };



module.exports = Snake;
