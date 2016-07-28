function Food(x, y, width, height, world) {
  this.x = x || 100;
  this.y = y || 50;
  this.width = 10;
  this.height = 10;
  this.world = world;
}

Food.prototype.topLeft = function () {
  return {
    x: this.x,
    y: this.y
  };
};

Food.prototype.topRight = function () {
  return {
    x: this.x + this.width,
    y: this.y
  };
};

Food.prototype.bottomLeft = function () {
  return {
    x: this.x,
    y: this.y + this.height
  };
};

Food.prototype.bottomRight = function () {
  return {
    x: this.x + this.width,
    y: this.y + this.height
  };
};





module.exports = Food;
