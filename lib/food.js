function Food(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width || 20;
  this.height = height || 20;
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

// function generateRandomFood(0, max) {
//   var x = Math.floor(Math.random() * (this.world.width - min)) + min;
//   var y =
//     return Math.floor(Math.random() * (max - min)) + min;
// }



module.exports = Food;
