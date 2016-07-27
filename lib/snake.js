
function Snake(options){
  this.x = options.x || 7;
  this.y = options.y || -12;
  this.width = options.width || 5;
  this.height = options.height || 5;
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
