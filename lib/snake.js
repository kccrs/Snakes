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

Snake.prototype.isEatingFood = function(food) {
    var widthCrash = this.topRight().x >= food.x && this.x <= food.topRight().x;
    var heightCrash = this.bottomLeft().y >= food.y && this.y <= food.bottomLeft().y;
    if (widthCrash || heightCrash) {
      return true;
    } else {
      return false;
    }
};



module.exports = Snake;
