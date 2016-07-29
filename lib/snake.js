function Snake(x, y, width, height, world){
  this.x = x || 20;
  this.y = y || 20;
  this.width = width || 20;
  this.height = height || 20;
  this.world = world;
}

// THIS CONTROLS HOW FAST THE SNAKE IS MOVING WHEN THE ARROWS ARE PRESSED
Snake.prototype.moveRight = function () {
  if (this.x + this.width >= 380) {
    return (this.x = 380);
  }
  this.x += 20;
};

Snake.prototype.moveLeft = function () {
  if (this.x <= 0) {
    return (this.x = 0);
  }
  this.x -= 20;
};

Snake.prototype.moveDown = function () {
  if (this.y + this.height >= 280) {
    return (this.y = 280);
  }
  this.y += 20;
};

Snake.prototype.moveUp = function () {
  if (this.y <= 0) {
    return (this.y = 0);
  }
  this.y -= 20;
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
